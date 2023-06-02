
import { Link } from "react-router-dom"

const Item = ( { id, model, price, stock, img } ) => {

    return (
        
        <div className="cards">
        
            <article className='card'>
            
            <header>
                <h2> { model } </h2>
            </header>
            
            <picture>
                <img src={img} alt={model} className='cardImg' />
            </picture>
            
            <section className="info">
                <p className='price'> Precio: $ {price} </p>
                <p className='stock'> Stock Disponible de {stock} Unidades </p>
            </section>

            <footer className='detalle'>
                <Link to={ `/item/${id}` } className='btn'> Ver detalles </Link>
            </footer>
            </article>    

        
        </div>
        
    )

}

export default Item