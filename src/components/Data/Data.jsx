//import lavasam1 from './data/img/lavasam1.jpg'


const products = [
{id: '1', name: 'RT38ngh', price: 350, category: 'Heladeras', img: 'https://images.samsung.com/is/image/samsung/assets/ar/refrigerators/side_by_side140x140.png?$N_108_PNG$', stock: 20, description: 'heladera con freezer nofrost de 380 litros de capacidad' },
{id: '2', name: 'AQ18fc', price: 650, category: 'Aire Acond', img: 'https://samsungar.vtexassets.com/arquivos/ids/175929-320-332/Samsung-93551302-ar-wall-mount-ar5000hm-401480-ar12ashqawk-bg-488836391Download-Source.png?v=637711194272400000', stock: 15, description: 'Aire acon de 4500frig'},
{id: '3', name: 'wm22bbg', price: 330, category: 'Lavarropas', img: 'https://samsungar.vtexassets.com/arquivos/ids/182447-320-332/WD90T4046BE-ED_001_Front_White.png?v=637889273594970000', stock: 20, description: ''},
{id: '4', name: 'RT42vgn', price: 350, category: 'Heladeras', img: 'https://samsungar.vtexassets.com/arquivos/ids/184195-320-332/Samsung-69926089-ar-rt38k5932sl-rt38k5932sl-b3-frontsilver-83969683Download-Source.png?v=637987594697470000', stock: 20, description: ''},
{id: '5', name: 'wm120mvh', price: 385, category: 'Lavarropa', img: 'https://samsungar.vtexassets.com/arquivos/ids/185555-320-332/Samsung-112332839-ar-washer-ww80j5446fwle-437891-ww70aa046bxubg-533939880--Download-Source--zoom.jpg?v=638025666365870000', stock: 20, description: ''},
{id: '6', name: 'RT38ngh', price: 350, category: 'Heladeras', img: 'https://samsungar.vtexassets.com/arquivos/ids/184714-320-332/RB33A3070WP-BG_001_Front.jpg?v=638004860826130000', stock: 20, description: ''},
{id: '7', name: 'smt28ggh', price: 350, category: 'Smart Phone', img: 'https://samsungar.vtexassets.com/arquivos/ids/184374-320-332/ZFOLD-BLACK.png?v=637993849499130000', stock: 20, description: ''},
{id: '8', name: 'AQ12hnd', price: 550, category: 'Aire Acond', img: 'https://samsungar.vtexassets.com/arquivos/ids/175943-320-332/Samsung-93551302-ar-wall-mount-ar5000hm-401480-ar12ashqawk-bg-488836391Download-Source.png?v=637711197448530000', stock: 20, description: ''},
{id: '9', name: 'led55ukh', price: 700, category: 'TV Led', img: 'https://samsungar.vtexassets.com/arquivos/ids/181442-320-332/Q80A_01.jpg?v=638048283388930000', stock: 20, description: ''},
{id: '10', name: 'smh30efg', price: 160, category: 'Smart Phone', img: 'https://samsungar.vtexassets.com/arquivos/ids/184306-320-332/ZFLIP-BLUE.png?v=637992955559000000', stock: 20, description: ''},
{id: '11', name: 'ww75bbh', price: 410, category: 'Lavarropas', img: 'https://samsungar.vtexassets.com/arquivos/ids/184837-320-332/WW4100--SILVER-FRONT.jpg?v=638007503155200000', stock: 20, description: ''},
{id: '12', name: 'smh30efg', price: 160, category: 'Smart Phone', img: 'https://samsungar.vtexassets.com/arquivos/ids/184306-320-332/ZFLIP-BLUE.png?v=637992955559000000', stock: 20, description: ''},
{id: '13', name: 'ww75bbh', price: 410, category: 'Lavarropas', img: 'https://samsungar.vtexassets.com/arquivos/ids/184837-320-332/WW4100--SILVER-FRONT.jpg?v=638007503155200000', stock: 20, description: ''},
{id: '14', name: 'smh30efg', price: 160, category: 'Smart Phone', img: 'https://samsungar.vtexassets.com/arquivos/ids/184306-320-332/ZFLIP-BLUE.png?v=637992955559000000', stock: 20, description: ''},
{id: '15', name: 'ww75bbh', price: 410, category: 'Lavarropas', img: 'https://samsungar.vtexassets.com/arquivos/ids/184837-320-332/WW4100--SILVER-FRONT.jpg?v=638007503155200000', stock: 20, description: ''},

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