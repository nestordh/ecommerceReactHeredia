import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
import carrito from './img/carrito.jpg'

const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext)

    return (
        <div className='contenedorCarrito'>
            <Link to='/cart' className="carrito" >
                <img src={carrito} alt="Cart-Widget" />  {cartQuantity()}
            </Link>
        </div>
    )
}

export default CartWidget;