import { useContext, useState } from 'react'
import { db } from '../../services/firebase/firebaseConfig'
import { CheckoutForm } from '../CheckoutForm/CheckoutForm'
import { CartContext } from '../../context/CartContext'
import { Timestamp, addDoc, collection, documentId, getDocs, query, writeBatch, where } from 'firebase/firestore'
import Spinner from 'react-bootstrap/Spinner';

export const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, cartTotal, limpiarCarrito} = useContext (CartContext)

    const createOrder = async ({nombre, apellido, telefono, email}) =>{
        setLoading (true)

        try{
            const objOrder = {
                buyer: {nombre, apellido, telefono, email},
                items: cart,
                total: cartTotal(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch (db)
            const outOfStock = []
            const ids = cart.map (prod => prod.id)
            const productsRef = collection (db, 'productos')
            const productsAddedFromFirestore = await getDocs (query(productsRef, where (documentId(), 'in', ids))) 
            const { docs } = productsAddedFromFirestore

            docs.forEach (doc =>{
                const dataDoc = doc.data()
                const stockOb = dataDoc.stock

                const productsAddedToCart = cart.find (prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart?.cantidad 

                if (stockOb >= prodQuantity){
                    batch.update (doc.ref, {stock: stockOb - prodQuantity})
                } else {
                    outOfStock.push ({ id: doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length === 0){
                await batch.commit ()
                const orderRef = collection (db, 'orders')
                const orderAdded = await addDoc (orderRef, objOrder)

                setOrderId (orderAdded.id)
                limpiarCarrito()
            } else {
                console.error ('Hay productos fuera de stock')
            }
        } catch (error) {
            console.log(error);
        } finally{
            setLoading (false)
        }
    }

    if (loading){
        return (
            <div className='spinner'>
              <Spinner animation="border" />;
            </div>
          )
    }

    if (orderId){
        return (
            <div className='container-final'>
                <h3>¡Gracias por su compra!</h3>
                <p>En las siguientes 72 hs recibira informacion sobre la misma en su correo electronico.</p>
                <p>El codigo de su orden es: {orderId}</p>
            </div> 
        )
    }

  return (
    <div className='form-checkout'>
        <h2 className='checkout'>Orden de compra</h2>
        <CheckoutForm onConfirm={createOrder}/>
    </div>
  )
}




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