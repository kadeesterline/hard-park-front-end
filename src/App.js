import {Switch, Route} from "react-router-dom"
import {useHistory} from "react-router-dom";
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Lot from './components/Lot';
import AddCarPage from './components/AddCarPage';
import DetailPage from "./components/DetailPage";
import './styles/App.css';

function App() {

  const history = useHistory();

  const [lot, setLot] = useState([])
  const [detail, setDetail] = useState({})
 
  
  const initialFormState = {
    image: '',
    make: '',
    model: '',
    year: 0,
    instagram: '',
    info: '',
    category: ''
  }
  const [formState, setFormState] = useState(initialFormState)

  useEffect(()=> {
    getLot()
    console.log('fetching data')
  },[]);


  function getLot(){
    fetch('http://localhost:9292/cars')
    .then((resp) => resp.json())
    .then(resp => setLot(resp))
    
  }
  

  function deleteCar(carToDelete){
    console.log('delete car function')
    //const newLot = lot.filter((car) => car !== carToDelete)
    
    fetch(`http://localhost:9292/delete/${carToDelete.id}`, {
      method: 'DELETE',
    })
    .then( res => res.json())
    
    .then(getLot)
  
    history.push('/lot')
  }

  function showDetail(car) {
    console.log('show detail function')
    history.push('/detailpage')
    fetch(`http://localhost:9292/cars/${car.id}`)
    .then((resp) => resp.json())
    .then(setDetail)
    
    
    
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormState(formState => ({...formState, [name]: value}))
  }

  function handleSubmit(event){
    
    
    event.preventDefault()
    console.log('handle submit function')
    if (formState.image === '') {
      alert('Please enter an image URL')
    }
    else if (formState.make === '') {
      alert('Please enter a make')
    }
    else if (formState.model === '') {
      alert('Please enter a model')
    }
    else if (formState.year <= 0) {
      alert('Please enter a year')
    }
    else if (formState.instagram === '') {
      alert('Please enter an Instagram username')
    }
    else if (formState.info === '') {
      alert('Please give some info on your car')
    }
    else {
      fetch('http://localhost:9292/addcar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })
      .then(console.log(formState))
      .then(setLot([...lot, formState]))
      .then(setFormState(initialFormState))
      .then(history.push('/lot'))
      
    }
  }

  function goToCategory(category){
    console.log(`going to ${category}`)
    fetch(`http://localhost:9292/category/${category}`)
    .then(resp => resp.json())
    .then(resp => setLot(resp.cars))
    .then(history.push('/lot'))
   
  }


  function clearFilter(){
    getLot()
    history.push('/lot')
  }


  



  return (
    <div className="App container-fluid">
      
      <NavBar />
      
      <Switch>
        
        <Route exact path='/lot'>
          <Lot lot={lot} showDetail={showDetail} clearFilter={clearFilter} goToCategory={goToCategory}/>
        </Route>

        <Route exact path='/park'>
        <AddCarPage handleSubmit={handleSubmit} handleChange={handleChange} formState={formState} />
        </Route>

        <Route exact path='/detailpage'>
          <DetailPage car={detail} deleteCar={deleteCar} />
        </Route>

        <Route path='/'>
          <Home goToCategory={goToCategory} />
        </Route>

      </Switch>
    
      
    </div>
  );
}

export default App;
