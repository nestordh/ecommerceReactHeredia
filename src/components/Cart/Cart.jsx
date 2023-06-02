import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartItem } from '../CartItem/CartItem'
import { CartContext } from '../CartContext/CartContext'


export const Cart = () => {
  const { cart, clearCart, cartQuantity, total } = useContext(CartContext) ;

  if(cartQuantity() === 0 ) {
    
    return(
        <>
            <h1> No hay productos en el carrito </h1>
            <Link to='/' className='Option'> Ir a Productos para seleccionar </Link>               
        </>
    )
  }

  return (
    <div className='carrito'>
        <div className='div-carrito1'>
           { cart.map (p => < CartItem key={p.id} {...p} />)}
        </div>
       
        <div className='div-carrito'>
             {/* <h3 className='titulo'> Total: ${cartTotal()}</h3> */}
             <h3 className='titulo'> Total: $ { total } </h3>

            <button 
                onClick={ () => clearCart ()}
                className='boton-carrito'>
                    Vaciar carrito
            </button>

            <Link to='/checkout' className='boton-carrito1'> Generar Compra </Link>
       
        </div>
    </div>
  )
}
