import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartItem } from '../CartItem/CartItem'
import { CartContext } from '../CartContext/CartContext'


export const Cart = () => {
  const { cart, clearCart, cartQuantity, priceTotal } = useContext(CartContext) ;

  (cartQuantity() === 0 ) 

 ?   
  
 (
        <>
            <h1 className='titulo'> No hay productos en el carrito </h1>
            <Link to='/' className='titulo2'> Ir a Productos para seleccionar </Link>               
        </>
    )
 

:

 (
    <div className='contenedor'>
       <div className='carrito'>
           { cart.map (p => < CartItem key={p.id} {...p} />)}
        </div>
       
        <div className='div-carrito'>
             {/* <h3 className='titulo'> Total: ${cartTotal()}</h3> */}
             <h3 className='titulo'> Total: $ { priceTotal } </h3>

            <button 
                onClick={ () => clearCart ()}
                className='btn'>
                    Vaciar carrito
            </button>

            <Link to='/checkout' className='btn'> Empezar Compra </Link>
       </div>
    </div>
  )
 }