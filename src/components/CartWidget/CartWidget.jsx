import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
import carrito from './img/carrito.jpg'

const CartWidget = () => {
    const {totalQuantity} = useContext (CartContext)

    return (
        
        <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}} >
            <img src= { carrito }  alt='carrito' className="dibujo" /> { totalQuantity } 
        </Link>
        
    //    <Link to='/cart' className="icono-carrito">
    //         <img src={carrito} alt="Cart-Widget"/>    
    //         {totalQuantity()}
    //          </Link>

    )
}

export default CartWidget;