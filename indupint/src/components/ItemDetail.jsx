const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{item.nombre}</h1>
                    <h3>{item.rendimiento}</h3>
                    <p>{item.descripcion}</p>
                    <p><b>{item.propiedades}</b></p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail