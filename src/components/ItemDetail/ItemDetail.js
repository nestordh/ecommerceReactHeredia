import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'


const ItemDetail = ({id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const HandleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader"> {name} </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"></img>
            </picture>
            <section>
                <p className="Info">  Categoria: {category} </p>
                <p className="Info">  Descripcion: {description} </p>
                <p className="Info">  Precio: {price} </p>
            </section>
            <footer className="ItemFooter">
                { quantityAdded > 0 ? (
                    <Link to = '/cart' className="Option"> Terminar compra </Link>
                ) : (
                // <ItemCount initial={1} stock={stock}  onAdd={(cantidad) => console.log('Cantidad Agregada ', cantidad)}/>
                <ItemCount initial={1} stock={stock}  onAdd= {HandleOnAdd}/>
                ) }
            </footer>
        </article>
    )
}

export default ItemDetail