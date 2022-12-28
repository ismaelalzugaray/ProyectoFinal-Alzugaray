import CartWidget from "./CartWidget"

function NavBar (){
    return(
        <>
        <h2>KretzCommerce</h2>
        <ul>
            <li><a href="#">Supermercados</a></li>
            <li><a href="#">Comercios</a></li>
            <li><a href="#">Laboratorios</a></li>
            <li><a href="#">Industrias</a></li>
        </ul> 
        <CartWidget/>
        </>
    )
}

export default NavBar