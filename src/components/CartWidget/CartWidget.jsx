import carrito from './img/carrito.jpg'
import './Cart.css'


const CartWidget = () => {

    return (
        <div className="carrito">
            <img src= {carrito}  alt= 'carrito' className="dibujo" />
             0
             {/* <p className='numCarro'>00</p>  */}
        </div>
    )
}

export default CartWidget;