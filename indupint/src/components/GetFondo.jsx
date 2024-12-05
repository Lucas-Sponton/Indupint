

const GetFondo = (pathname) => {
    const normalizedPathname = pathname.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();

    if (normalizedPathname === '/')
        return 'imagenFondoBienvenida';
    if (normalizedPathname.startsWith('/productos/desoxidantes-y-desengrasantes'))
        return 'imagenFondoDesoxidantes';
    if (normalizedPathname.startsWith('/productos/fondos-anticorrosivos-y-antioxidos'))
        return 'imagenFondoAnticorrosivos';
    if (normalizedPathname === '/productos/esmaltes-sinteticos-nitro-y-cauchos-clorados')
        return 'imagenFondoCauchoClorado1';
    if (normalizedPathname.startsWith('/productos/esmaltes-revestimientos-epoxi-y-poliuretanos-bi-componentes'))
        return 'imagenFondoRevestimientosPoliuretanos';
    if (normalizedPathname.startsWith('/productos/esmalte-y-revestimiento-frigorifica-y-alimenticia'))
        return 'imagenFondoRevestimientoFrigorifico';
    if (normalizedPathname === '/productos/esmaltes-sinteticos-nitro-y-cauchos-clorados-dos')
        return 'imagenFondoCauchoClorado2';
    if (normalizedPathname.startsWith('/productos/esmaltes-usos-especiales'))
        return 'imagenFondoUsosEspeciales';
    if (normalizedPathname.startsWith('/productos/aluminios-y-barnices'))
        return 'imagenFondoAluminio';
    if (normalizedPathname.startsWith('/productos/impermeabilizante-y-recubrimiento-acrilico'))
        return 'imagenFondoImpermeabilizante';
    if (normalizedPathname.startsWith('/productos/esmaltes-especificos-removedor-y-diluyentes'))
        return 'imagenFondoEsmaltesEspecificos';
    if (normalizedPathname.startsWith('/productos/varios'))
        return 'imagenFondoVarios';
    else return 'imagenFondoProductos'
}

export default GetFondo