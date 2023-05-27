
import Item from '../Item/Item'

const ListGroupStyles = {
    "border" : "solid 5px pink",
    "marginTop" : "15px"
}
export const ItemList = ( {products}) => {
  return (
            <div style={ListGroupStyles} className='ListGroup'>
                { products.map(prod => <Item key={prod.id} {...prod} /> )}
            </div>
    )
}

  