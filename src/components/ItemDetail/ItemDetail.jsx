
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
//import Data from '../Data/Data'


const ItemDetail = ({id, model, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext (CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {id, model, price}
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
                        <Link to='/cart' className="Option"> Finalizar compra </Link>
                    ) : (
                         <ItemCount initial={1} stock={stock}  onAdd={handleOnAdd} />
                    ) }
{/* 
{
        cantidadAgregada > 0 ? (
          <div className='controles-botones'>
          <Link to= '/' className='terminar-boton'>Seguir comprando</Link>
          <Link to= '/cart' className='terminar-boton'>Terminar Compra</Link>
          </div>
        ) : (
          <ItemCount valorInicial={1} stock={stock} agregar={agregados}/>
        )
      } */}


            </footer>

        </article>
        </div>
    )
}

export default ItemDetail