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
  

  useEffect(()=> {
    fetch('http://localhost:9292/cars')
    .then((resp) => resp.json())
    .then(setLot)
  }, [])

  
/*
  function deleteCar(car){
    fetch(`http://localhost:9292/delete/${car.id}`, {
      method: 'DELETE',
    })
    .then( res => res.json())
    .then(setLot)
  }
*/
  function showDetail(car) {
    fetch(`http://localhost:9292/cars/${car.id}`)
    .then((resp) => resp.json())
    .then(setDetail)
    
    
    history.push('/detailpage')
  }
  


  function goHome(){
    history.push('/home')
  }



  return (
    <div className="App container-fluid">
      
      <NavBar gotToPage={goHome}/>
      
      <Switch>
        
        <Route exact path='/lot'>
          <Lot lot={lot} showDetail={showDetail}/>
        </Route>

        <Route exact path='/park'>
        <AddCarPage />
        </Route>

        <Route exact path='/detailpage'>
          <DetailPage car={detail} /*deleteCar={deleteCar}*/ />
        </Route>

        <Route path='/'>
          <Home />
        </Route>

      </Switch>
    
      
    </div>
  );
}

export default App;
