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
  const [isFiltered, setIsFiltered] = useState(false)
 
  
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

  const initialCommentState = {
    user_name: '',
    content: '',
    car_id: 0
  }
  const [commentBoxState, setCommentBoxState] = useState(initialCommentState)

  useEffect(()=> {
    getLot()
    
  },[]);


  function getLot(){
    fetch('http://localhost:9292/cars')
    .then((resp) => resp.json())
    .then(resp => setLot(resp))
    
  }
  

  function deleteCar(carToDelete){
    
    //const newLot = lot.filter((car) => car !== carToDelete)
    
    fetch(`http://localhost:9292/delete/${carToDelete.id}`, {
      method: 'DELETE',
    })
    .then( res => res.json())
    
    .then(getLot)
  
    history.push('/lot')
  }

  function showDetail(car) {
    
    history.push('/detailpage')
    fetch(`http://localhost:9292/cars/${car.id}`)
    .then((resp) => resp.json())
    .then(resp => setDetail(resp))
    
  }

  const handleFormChange = (event) => {
    const {name, value} = event.target;
    setFormState(formState => ({...formState, [name]: value}))
  }

  const handleCommentBoxChange = (event) => {
    const {name, value} = event.target;
    setCommentBoxState(commentBoxState => ({...commentBoxState, [name]: value}))
  }

  function handleSubmit(event){
    event.preventDefault()
    
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
    else if (formState.category === 'none') {
      alert('Please choose a category')
      
    }
    else {
      
      fetch('http://localhost:9292/addcar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })
      .then(getLot())
      .then(setFormState(initialFormState))
      .then(history.push('/lot'))
      
    }
  }

  function handleNewComment(event){
    event.preventDefault()
    
    if (commentBoxState.content === '') {
      alert('Comments must contain text!')
    }
    else if (commentBoxState.user_name === '') {
      alert('Please provide a username')
    }
    else {
      fetch(`http://localhost:9292/car/addcomment/${detail.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentBoxState),
      })
      .then(getLot())
      .then(setDetail(detail))
      .then(showDetail(detail))
      .then(setCommentBoxState(initialCommentState))
    }
  }

  function goToCategory(category){
    
    setIsFiltered(true)
    fetch(`http://localhost:9292/category/${category}`)
    .then(resp => resp.json())
    .then(resp => setLot(resp.cars))
    .then(history.push('/lot'))
   
  }


  function clearFilter(){
    getLot()
    setIsFiltered(false)
    history.push('/lot')
  }


  



  return (
    <div className="App container-fluid">
      
      <NavBar />
      
      <Switch>
        
        <Route exact path='/lot'>
          <Lot 
            lot={lot} 
            showDetail={showDetail} 
            clearFilter={clearFilter} 
            goToCategory={goToCategory} 
            handleSubmit={handleSubmit} 
            handleChange={handleFormChange} 
            formState={formState}
            isFiltered={isFiltered}
            
            />
        </Route>

        <Route exact path='/park'>
        <AddCarPage 
          handleSubmit={handleSubmit} 
          handleChange={handleFormChange} 
          formState={formState} 
          />
        </Route>

        <Route exact path='/detailpage'>
          <DetailPage 
            car={detail} 
            deleteCar={deleteCar} 
            handleNewComment={handleNewComment} 
            commentBoxState={commentBoxState} 
            setCommentBoxState={setCommentBoxState}
            handleCommentBoxChange={handleCommentBoxChange}
            />
        </Route>

        <Route path='/'>
          <Home goToCategory={goToCategory} />
        </Route>

      </Switch>
    
      
    </div>
  );
}

export default App;
