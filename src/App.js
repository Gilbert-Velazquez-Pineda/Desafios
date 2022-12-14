import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './componentes/navbar/NavBar'
import Inicio from './componentes/paginas/Inicio' 
import ItemDetail from './componentes/navbar/ItemDetail';
import SwapiContainer from './componentes/swapi/SwapiContainer';
import ItemListContainer from './componentes/navbar/ItemListContainer'
import CartWidget from './componentes/navbar/CartWidget';


function App() {
  //DOM
  return (
    <div className="App">
      <Router>
          <NavBar/>
          <Routes>
          <Route exact path="/" element={<Inicio/>}/>
            <Route  path='/:id' element={<ItemDetail/>}/>
            <Route exact path="ItemListContainer" element={<ItemListContainer/>}/>
            <Route  path="/SwapiContainer" element={<SwapiContainer/>}/>
            <Route  path="/CartWidget" element={<CartWidget/>}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
