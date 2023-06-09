import { useContext } from 'react'
import React from 'react'
import { CartContext } from '../CartContext/CartContext'

export const CartItem = ({model, price, quantity, id}) => {

  const {removeItem} = useContext (CartContext)

  return (
    <div className='ListGroup'>
      <div className='cards'>
        <section className='cart-item'>
            <h4> {model} </h4>
            <div> Precio: $ {price} </div>
            <div> Cantidad: {quantity} </div>        
            <div> Subtotal: $ {price*quantity} </div>    
            <button onClick={ () => removeItem(id)} className='btn'> X </button>
        </section>
      </div>
    </div>
  )
  }



