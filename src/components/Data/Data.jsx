//import lavasam1 from './data/img/lavasam1.jpg'


const products = [
{
    id: '1',
    name: 'RT38ngh',
    price: 350,
    category: 'heladeras',
    img: 'https://images.samsung.com/is/image/samsung/assets/ar/refrigerators/side_by_side140x140.png?$N_108_PNG$',
    stock: 20,
    description: 'heladera con freezer nofrost de 380 litros de capacidad'
},
{ id: '2', name: 'AQ18fc', price: 650, category: 'Aire Acond', img: '', stock: 15, description: 'Aire acon de 4500frig'},
{ id: '3', name: 'RT38ngh', price: 350, category: 'heladeras', img: './components/Data/Img/samhel1.jpg', stock: 20, description: ''},
{ id: '4', name: 'wm120mvh', price: 385, category: 'lavarropa', img: './components/Data/Img/lavasam1.jpg', stock: 20, description: ''},
{ id: '5', name: 'RT38ngh', price: 350, category: 'heladeras', img: 'https://samsungar.vtexassets.com/arquivos/ids/184714-320-332/RB33A3070WP-BG_001_Front.jpg?v=638004860826130000', stock: 20, description: ''},
{ id: '6', name: 'RT38ngh', price: 350, category: 'celular', img: '', stock: 20, description: ''},
{ id: '7', name: 'RT38ngh', price: 350, category: 'electronica', img: '', stock: 20, description: ''},
]

export const getProducts = () => {
    return new Promise (( resolve ) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = ( productId ) => {
    return new Promise ( ( resolve ) => {
        setTimeout(() => {
            resolve( products.find ( prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = ( productCategory ) => { 
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter ( prod => prod.category === productCategory))
            //resolve(productos)

        }, 500)
    })
}

export default products;