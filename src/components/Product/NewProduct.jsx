import { addDoc, collection } from "firebase/firestore"
import { db } from "../services/firebase/firebaseConfig"
import { useForm } from "../Hook/useForm"


export const NewProduct = () => {
 
 const { form, handleInputChange, reset } = useForm({
    model:"",
    category: "",
    price: "",
    stock: "",
    description: "",
    img: ""
 })
  
 const handleSubmit = (e) => {
    e.preventDefault()

    const productsCollection = collection( db, 'products')
    
    const newProductObj = {
        model: form.model,
        category: form.category,
        price: parseFloat(form.price),
        stock: parseInt(form.stock),
        description: form.description,
        img: form.img
    }

    addDoc(productsCollection, newProductObj)
    .then( ( {id} ) => console.log(id))
    .catch( error => console.error(error))

    reset()

}

    return (

        <form onSubmit={handleSubmit}>
            <input
                placeholder="modelo del producto"
                name="model"
                onChange={handleInputChange}
                type="text"
                value={form.model}
                />
           
            <input
                placeholder="categoria del producto"
                name="category"
                onChange={handleInputChange}
                type="text"
                value={form.category}
                
                />
           
            <input
                placeholder="precio del producto"
                name="price"
                onChange={handleInputChange}
                type="number"
                step="0.01"
                value={form.price}
                
                />
            <input
                placeholder="stock del producto"
                name="stock"
                onChange={handleInputChange}
                type="number"
                value={form.stock}
                />
            <input
                placeholder="Descripcion del producto"
                name="description"
                onChange={handleInputChange}
                type="text"
                value={form.description}
                />
            <input
                placeholder="Imagen del producto"
                name="img"
                onChange={handleInputChange}
                type="img"
                value={form.img}
                />

            <button type="submit">Cargar</button>

        </form>
    )
}
