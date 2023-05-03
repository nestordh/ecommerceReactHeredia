
import { Link } from "react-router-dom"
import './Item.css'

const Item = ({id, name, price, stock, img, description}) => {

    return( <div className="cards">
        
        <article className='card'>
            
            <header className='name'>
                <h2 className='cardNombre'>{name}</h2>
            </header>
            
            <picture>
                <img src={img} alt={name} className='cardImg' />
            </picture>
            
            <section>
                <p className='info'> Precio: u$s{price} </p>
                <p className='Info'> Stock Disponible: {stock} unidades </p>
            </section>
            
            <footer className='detalle'>
                {/* <button className='Option'>Ver Detalles</button> */}
                <Link to = { `/item/${id} `} className='Option'> Ver detalles </Link>
            </footer>

        </article>
        </div>
    )

}

export default Item