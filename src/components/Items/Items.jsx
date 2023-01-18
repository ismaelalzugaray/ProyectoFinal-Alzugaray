import { Link } from "react-router-dom"
import "./Items.css"
function Items ({id, title, price, description, imgurl}) {
    
    
    const urlDetail = `/item/${id}`

    return (
        <div className="card">
            <div className="cardTitle">
                <h2>{title}</h2>
            </div>
            <div className="cardImg">
                <img src={imgurl} alt="imagen" />
            </div>
            <div className="cardDetail">
                <h4>${price}</h4>
                <p>{description}</p>
            </div> 
            <Link className="cardBtn" to={urlDetail}>
            <button>Ver Detalle</button>
            </Link>
        </div>
    )
}
export default Items