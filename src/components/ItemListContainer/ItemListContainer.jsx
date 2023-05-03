import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../Data/Data"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({saludo}) => {
   const [ products , setProducts ] = useState([])
   
    const { categoryId } = useParams()

   useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then ( response => {
                setProducts ( response )
        })
        .catch(error => {
            console.error(error)
        })
     }, [categoryId])
         
    return(
        <div>
            <h2> {saludo} </h2>
            < ItemList products = { products } />
        </div>
        )
    }  
   
export default ItemListContainer