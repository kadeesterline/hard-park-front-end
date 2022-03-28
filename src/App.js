import {Switch, Route} from "react-router-dom"
import {useHistory} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Lot from './components/Lot';
import AddCarPage from './components/AddCarPage';
import DetailPage from "./components/DetailPage";
import './styles/App.css';

function App() {

  const history = useHistory();

  function goHome(){
    history.push('/home')
  }



  return (
    <div className="App container-fluid">
      
      <NavBar gotToPage={goHome}/>
      
      <Switch>
        
        <Route exact path='/lot'>
          <Lot />
        </Route>

        <Route exact path='/park'>
        <AddCarPage />
        </Route>

        <Route exact path='/detailpage'>
          <DetailPage />
        </Route>

        <Route path='/'>
          <Home />
        </Route>

      </Switch>
    
      
    </div>
  );
}

export default App;
