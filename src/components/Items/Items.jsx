import { Link } from "react-router-dom"
import "./Items.css"
import Button from "../Button/Button"
function Items({ id, title, price, description, imgurl }) {


    const urlDetail = `/item/${id}`

    return (

        <div className="card col-xl-3 col-md-4 col-xs-12 p-0">
                <img  className="card-img-top" src={imgurl} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="price">${price}</p>
                    <Button Ruta={urlDetail} Text="Comprar" />
                    
                </div>
        </div>
)

}
export default Items