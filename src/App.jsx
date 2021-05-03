import './App.css';
import Hola from './components/matata'
import Listado from './components/listadoP'
import Temperatura from './components/temperatura'
import Propiedades from './components/propiedades'
import Api from './components/api'
import Usuario from './components/Usuario'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="row container">
      <h2 className="m-2"><Link to='/'>Mini CRUD</Link></h2>
      <h2 className="m-2"><Link to='/hola'>Bienvenida</Link></h2>
      <h2 className="m-2"><Link to='/temperatura'>Temperatura</Link></h2>
      <h2 className="m-2"><Link to='/propiedades'>Propiedades</Link></h2>
      <h2 className="m-2"><Link to='/api'>Api</Link></h2>
      </div>

      <Switch>
        <Route path='/hola'>
          <Hola></Hola>
        </Route>
        <Route path='/api'>
          <Api></Api>
        </Route>
        <Route path='/temperatura'>
          <Temperatura></Temperatura>
        </Route>
        
        <Route path="/propiedades">
          <Propiedades nombre = 'Samuel'></Propiedades>
        </Route>
        <Route path='/usuario/:id'>
            <Usuario></Usuario>
        </Route>
        <Route path='/'>
            <Listado></Listado>
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
