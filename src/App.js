import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { CartScreen } from './components/CartScreen/CartScreen';
import { UIProvider } from './context/UIContext';
import { UserAuthContext } from './context/UserAuthContext';
import { useContext } from 'react';
import { UserAuthenticate } from './components/UserAuthenticate/UserAuthenticate';




function App() {

  const {isAuthenticated} = useContext(UserAuthContext);

   return (
    <>
      <UIProvider>
        <CartProvider>
          <BrowserRouter>
            {/*navbar lo dejamos afuera del swich para que quede estatico cuando nos movemos*/}
            <NavBar />

            <Switch>
            { isAuthenticated 
              ?
              <>
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
                <CartScreen/>
              </Route>

              <Route path="*">
                  <Redirect to="/"/>
              </Route>
              </>
              :
                <UserAuthenticate/>
              }
              
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </UIProvider>
    </>
  );
}
export default App;
