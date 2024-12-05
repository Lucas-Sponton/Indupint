import { NavLink } from "react-router-dom"

const ProductosCategorias = () => {
    return (
        <div>
            <h1 className="mb-dos">¡Garantizamos la mas alta calidad en toda nuestra línea de productos!</h1>
            <ul className="nav justify-content-center">
                <li className="nav-item mx-1 fs-6">
                    <NavLink to={"/productos/desoxidantes-y-desengrasantes"} className="nav-link">Desoxidantes y Desengrasantes</NavLink>
                </li>
                <li className="nav-item mx-1 fs-6">
                    <NavLink to={"/productos/fondos-anticorrosivos-y-antioxidos"} className="nav-link">Fondos Anticorrosivos y Antióxidos</NavLink>
                </li>
                <li className="nav-item mx-1 fs-6">
                    <NavLink to={"/productos/esmaltes-sinteticos-nitro-y-cauchos-clorados"} className="nav-link">Esmaltes sintéticos, Nitro y Cauchos Clorados</NavLink>
                </li>
                <li className="nav-item mx-1 fs-6">
                    <NavLink to={"/productos/esmaltes-revestimientos-epoxi-y-poliuretanos-bi-componentes"} className="nav-link">Esmaltes, Revestimientos Epoxi y Poliuretanos Bi Componentes</NavLink>
                </li>
                <li className="nav-item mx-1 fs-6">
                    <NavLink to={"/productos/esmalte-y-revestimiento-frigorifica-y-alimenticia"} className="nav-link">Esmalte y revestimiento industria Frigorífica y Alimenticia en general</NavLink>
                </li>
                <li className="nav-item mx-1 fs-6">
                    <NavLink to={"/productos/esmaltes-sinteticos-nitro-y-cauchos-clorados-dos"} className="nav-link">Esmaltes Sintéticos, Nitro y Cauchos Clorados 2</NavLink>
                </li>
                <li className="nav-item mx-1 fs-6">
                    <NavLink to={"/productos/esmaltes-usos-especiales"} className="nav-link">Esmaltes usos especiales</NavLink>
                </li>
                <li className="nav-item mx-1 fs-6">
                    <NavLink to={"/productos/aluminios-y-barnices"} className="nav-link">Aluminios y Barnices</NavLink>
                </li>
                <li className="nav-item mx-1 fs-6">
                    <NavLink to={"/productos/impermeabilizante-y-recubrimiento-acrilico"} className="nav-link">Impermeabilizante y Recubrimiento Acrilico</NavLink>
                </li>
                <li className="nav-item mx-1 fs-6">
                    <NavLink to={"/productos/esmaltes-especificos-removedor-y-diluyentes"} className="nav-link">Esmaltes específicos, Removedor y Diluyentes</NavLink>
                </li>
                <li className="nav-item mx-1 fs-6">
                    <NavLink to={"/productos/varios"} className="nav-link">Varios</NavLink>
                </li>
            </ul>
            <p class="fs-dos"><b>Nuestros Productos</b></p>
            <NavLink className="btn btn-outline-info" to="/productos">Ver todos</NavLink>
        </div>
    )
}

export default ProductosCategorias