import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
      <BrowserRouter>
        {/*navbar lo dejamos afuera del swich para que quede estatico cuando nos movemos*/}
        <NavBar />

        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/productos/:categoryId">
            <ItemListContainer />
          </Route>
          <Route exact path="/detail/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/contacto">
            <h1>Contacto</h1>
          </Route>
          <Route exact path="/cart">
            <h1>En construccion</h1>
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
