import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/quartz/bootstrap.min.css";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { CartScreen } from './components/CartScreen/CartScreen';
import { UIProvider } from './context/UIContext';
import { UserAuthContext } from './context/UserAuthContext';
import { useContext } from 'react';
import { UserAuthenticate } from './components/UserAuthenticate/UserAuthenticate';
import { Checkout } from './components/Checkout/Checkout';
import Signup from './SignUp/SignUp';
import { Contactos } from './components/Contactos/contactos';


function App() {

  const { isAuthenticated } = useContext(UserAuthContext);

  return (
    <>
     
      <UIProvider>
        <CartProvider>
          <BrowserRouter>

            <Switch>
              {isAuthenticated
                ?
                <>
                  <NavBar />
                  <Route exact path="/" >
                    <ItemListContainer />
                  </Route>
                  <Route exact path='/signup' component={Signup}/>
                  
                  <Route exact path="/productos/:categoryId">
                    <ItemListContainer />
                  </Route>

                  <Route exact path="/detail/:itemId">
                    <ItemDetailContainer />
                  </Route>

                  <Route exact path="/contacto">
                    <Contactos/>
                  </Route>

                  <Route exact path="/cart">
                    <CartScreen />
                  </Route>

                  <Route exact path="/checkout">
                    <Checkout />
                  </Route>
                 
                </>
                :
                <UserAuthenticate />
              }
            </Switch>
          </BrowserRouter>
        </CartProvider>
      </UIProvider>
    </>
  );
}
export default App;
