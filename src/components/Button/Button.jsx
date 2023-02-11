import React from "react"
import { Link } from "react-router-dom"
import "./Button.css"
// 
function Button({Text, Ruta, Evt, Disable, Type}){
    return(
        <Link to={Ruta}>
            <button type={Type} onClick={Evt} className="genButton" disabled={Disable}>{Text}</button>
        </Link>
    )
}

export default Button