import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import "./NavBar.css"


function NavBar (){

    return(
        <div className="menuBar">
        <h1>
        <Link to="/">KretzCommerce</Link>
        </h1>
        <ul className="menuList">
        <li><Link to="/category/supermercados">Supermercados</Link></li>
        <li><Link to="/category/comercios">Comercios</Link></li>
        <li><Link to="/category/laboratorios">Labarotorios</Link></li>
        <li><Link to="/category/industrias">Industrias</Link></li>
        <li><Link to="/category/insumos">Insumos y Accesorios</Link></li>
           
        </ul>
        <CartWidget/>
        </div>
    )
}

export default NavBar