import { useState, useEffect} from "react"
import DetailContainer from "./DetailContainer";


const Item = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect (() => {
        let timeoutId;
        if (isOpen) {
            timeoutId = setTimeout(() => {
                setIsOpen(false);
            }, 11000);
        }
        return () => clearTimeout(timeoutId);
    }, [isOpen]);

    const cerrarDetalles = () => {
        setIsOpen(false)
    }

    return (
        <div className="col-3">
            <div className="card main__productCard">
                <div className="card-body">
                    <h1 className="card-title fs-5">{item.nombre}</h1>
                    <h2 className="card-subtitle mb-2 main__productCard--h2 main__letraH2">{item.rendimiento}</h2>
                    <button type="button" class="boton btn btn-outline-info main__productCard-botonInfo w-50 position-fixed bottom-0 start-50" onClick={() => setIsOpen(true)}>Información</button>
                </div>
            </div>
            <DetailContainer item={item} isOpen={isOpen} onClose={cerrarDetalles} />
        </div>
        
    )
}

export default Item