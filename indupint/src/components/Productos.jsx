import { useEffect, useState } from "react";
import arrayProductos from "../productos.json";
import ItemProductos from "./ItemProductos";
import ProductosCategorias from "./ProductosCategorias";
import { useParams } from "react-router-dom";


const Productos = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos)
            }, 2000);
        })

        promesa.then(response => {
            setItems(response)
        })
    }, [id])

    return (
        <div className="container my-5">
            <div className="row">
                <ProductosCategorias />
            </div>
            <div className="row">
                <ItemProductos items={items} />
            </div>
        </div>

    )
}

export default Productos