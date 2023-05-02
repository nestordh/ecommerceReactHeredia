//import './Item.css'

const Item = ({id, name, price, stock, img, description}) => {

    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Precio: u$s{price}
                </p>
                <p className='Info'>
                    Stock Disponible: {stock} unidades
                </p>
            </section>
            <footer className='ItemFooter'>
                {/* <button className='Option'>Ver Detalles</button> */}
                <Link to = { `/item/${id} `} className='Option'> Ver detalles </Link>
            </footer>
        </article>
    )
}

export default Item