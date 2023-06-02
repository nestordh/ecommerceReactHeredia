import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'

const ItemDetail = ({id, model, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext (CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {id, model, price}
            addItem(item, quantity)
        }
//correciones ok
    return (
        <div className='cards'>
        <article className="card">
            
            <header>
                    <h2> {model} </h2>
            </header>
                
            <picture>
                    <img src={img} alt={model} className="cardImg" />
            </picture>
                
            <section className="info">
                    <p className="category"> Categoria: {category} </p>
                    <p className="description"> Descripcion: {description} </p>
                    <p className="price"> Precio: {price} </p>
            </section>
            
            <section className="detail">
                    { quantityAdded > 0 ? (
                        <>  
                            <Link to='/cart' className="btn"> Finalizar compra </Link>
                            <Link to= '/' className='btn'> Seguir comprando </Link>
                        </>
                    ) : (
                         <ItemCount initial={1} stock={stock}  onAdd={handleOnAdd} />
                        ) }
            </section>

        </article>
        </div>
    )
}

export default ItemDetail