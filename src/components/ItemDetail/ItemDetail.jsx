import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import Data from '../Data/Data'
import { useState } from 'react'

const ItemDetail = ({id, model, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const HandleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, model, price
        }
        addItem(item, quantity)
    }
    return (
        <div className='cards'>
        <article className="card">
            <header className="model">
                <h2 className="cardModel"> {model} </h2>
            </header>
            <picture>
                <img src={img} alt={model} className="cardImg"></img>
            </picture>
            <section>
                <p className="Info">  Categoria: {category} </p>
                <p className="Info">  Descripcion: {description} </p>
                <p className="Info">  Precio: {price} </p>
            </section>
            <footer className="detalle">
                { quantityAdded > 0 ? (
                    <Link to = '/cart' className="Option"> Terminar compra </Link>
                ) : (
                // <ItemCount initial={1} stock={stock}  onAdd={(cantidad) => console.log('Cantidad Agregada ', cantidad)}/>
                <ItemCount initial={1} stock={stock}  onAdd= {HandleOnAdd}/>
                ) }
            </footer>
        </article>
        </div>
    )
}

export default ItemDetail