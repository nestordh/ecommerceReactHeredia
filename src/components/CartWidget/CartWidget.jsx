import carrito from './img/carrito.jpg'
import './Cart.css'


const CartWidget = () => {

    return (
        <div className="carrito">
            <img src= { carrito }  alt= 'carrito' className="dibujo" />
            <p className='numCarro'>0</p>  
        </div>
    )
}

export default CartWidget;