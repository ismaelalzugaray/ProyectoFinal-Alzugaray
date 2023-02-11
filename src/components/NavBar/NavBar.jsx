import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"


function NavBar() {

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg">

                <div className="container-fluid">

                    <div className="container-fluid logoDiv">
                        <Link to="/" className="logo">
                            <h3>
                                KRETZCOMMERCE
                            </h3>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            
                                <li className="nav-item">
                                    <Link to="/category/supermercados" className="nav-link alink"><p>Supermercados</p></Link>
                                </li>
                         

                            
                                <li className="nav-item">
                                <Link to="/category/comercios" className="nav-link alink"><p>Comercios</p></Link>

                                </li>
                         

                           
                                <li className="nav-item">
                                 <Link to="/category/industrias" className="nav-link alink"><p>Industrias</p></Link>

                                </li>
                            

                            
                                <li className="nav-item">
                                 <Link to="/category/laboratorios" className="nav-link alink"><p>Laboratorios</p></Link>

                                </li>
                           

                            
                                <li className="nav-item">
                                 <Link to="/category/insumos" className="nav-link alink"><p>Insumos</p></Link>

                                </li>
                       

                        </ul>
                            <CartWidget/>
                    </div>
                </div>
            </nav>

        </div>

    )
}
export default NavBar