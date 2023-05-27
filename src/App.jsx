import './App.css'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider }  from "./components/CartContext/CartContext";
import Item from './components/Item/Item';
import { Footer } from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import { Cart } from './components/Cart/Cart';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


export const App = () => {

  return (
    <div className="App">
       <BrowserRouter>
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path = "/" element = { <ItemListContainer saludo ={'Todos nuestros productos'} /> } />
                    <Route path = "/lista" element = { <Item/> } />
                    <Route path = "/category/:categoryId" element = { <ItemListContainer saludo ={'Productos por categoria'}/> } />
                    <Route path = "/item/:itemId" element = { <ItemDetailContainer /> } />
                    <Route path = '/cart' element = { <Cart/> } />
                    <Route path = '/checkout' element= { <Checkout/> } />
                    <Route path = " * " element = { <h1> 404 NOT FOUND </h1> } />
                </Routes>
           </CartProvider>  
      <Footer/>
      </BrowserRouter>
    </div>
  );
}
