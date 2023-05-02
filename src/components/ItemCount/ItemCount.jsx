import React, { useState } from 'react';
import'./ItemCount.css';


const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => (quantity < stock) && (setQuantity(quantity + 1));

    const decrement = () => (quantity > 1) && (setQuantity(quantity - 1));

    return (
        <div className="counter">
            <div className="controles">
                <button className="btnC1" onClick={decrement}>-</button>
                <h4 className="numContador">{quantity}</h4>
                <button className="btnC2" onClick={increment}>+</button>
            </div>
            <div>
                <button className="btnC3" onClick={() => onAdd(quantity)} disabled={!stock}> Agregar al carrito </button>
            </div>
        </div>
    );
}
    
    export default ItemCount;
 