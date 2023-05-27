
import { Link } from "react-router-dom"

const Item = ( {id, model, price, stock, img, description} ) => {

    return (
         <div className="cards">
        
            <article className='card'>
            
            <header className='model'>
                <h2 className='cardModel'> { model } </h2>
            </header>
            
            <picture>
                <img src={img} alt={model} className='cardImg' />
            </picture>
            
            <section>
                <p className='info'> Precio: u$s{price} </p>
                <p className='Info'> Stock Disponible de {stock} Unidades </p>
            </section>
            
            <footer className='detalle'>
                <Link to={ `/item/${id}` } className='Option'> Ver detalles </Link>
            </footer>

        </article>
        </div>
    )

}

export default Item