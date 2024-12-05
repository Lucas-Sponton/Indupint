import Item from "./Item"

const ItemProductos = ({ items }) => {


    return (
        <>
            {items.map(producto => (
                <Item key={producto.id} item={producto} />
            ))}
        </>
    )
}

export default ItemProductos