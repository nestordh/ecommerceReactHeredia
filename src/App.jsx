import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  
  return (
    
      <div>
       
        {/* < NavBar />
        < ItemListContainer  saludo = {'Bienvenidos'} / > */}
        {/* < ItemCount initial={1} stock={10} onAdd={(quantity) =>console.log('Cantidad Agregada', quantity) } /> */}
        {/* <ItemDetailContainer /> */}


        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path = '/' element = { < ItemListContainer /> } />
          <Route path='/lista' element ={ <Item />} />
          <Route path = '/category/:categoryId' element = { < ItemListContainer />} />
          <Route path= '/item/:itemId' element = { < ItemDetailContainer /> } />
          <Route path= '*' element = { <h1> 404 NOT FOUND </h1> } />
        </Routes>
      </BrowserRouter>
      </div>
    
  )
}

export default App;
