import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    
    const [quantity, setQuantity] = useState(initial);
    
    const decrement = () => (quantity > 1) && (setQuantity(quantity - 1));
    
    const increment = () => (quantity < stock) && (setQuantity(quantity + 1));

//correcciones ver

    return (
        <div div className=" ListGroup">
        
        <div className="counter">
            
            <div className="controles">
                <button className="btnC1" onClick={decrement} >-</button>
                <h5 className="numContador"> { quantity } </h5>
                <button className="btnC2" onClick={increment} >+</button>
            </div>
            
            <button 
                className="btnC3" onClick={() => onAdd(quantity)}  disabled={!stock}> Agregar al carrito
            </button>
            
        </div>
       
        </div>
    );
}
    
    export default ItemCount;
 