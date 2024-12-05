
const DetailContainer = ({ item, isOpen, onClose }) => {
    return (
        <div className={`deslizContenedor ${isOpen ? 'open' : ""}`}>
            
            <div className="deslizContenido">
                <h1 className="fs-3 row alturaContenedor">{item.nombre}</h1>
                <h3 className="fs-5 my-4 row alturaContenedor">{item.rendimiento}</h3>
                <img src="/src/assets/pintura-placeHolderd-1.webp" alt="bucket" className="row img-fluid alturaContenedor-img" />
                <p className="py-4 row flex-grow-1 alturaContenedor-descripcion fs-5">{item.descripcion}</p>
                <p className="row flex-grow-1 alturaContenedor"><b>{item.propiedades}</b></p>

            </div>
            <button onClick={onClose} className="btn btn-outline-info botonDetailContainer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill text-light" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg></button>
        </div>
    )
}

export default DetailContainer