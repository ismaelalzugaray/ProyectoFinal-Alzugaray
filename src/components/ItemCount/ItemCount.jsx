import { useState } from "react"
import Button from "../Button/Button"
import "./ItemCount.css"

function ItemCount ({onAddToCart, stock}){

    const [count, setCount] = useState(0)
    
    function handleOnADdd (){
        if (count < stock) {
            setCount(count + 1)
        }
        
    }

    function handleOnSubstract(){
        if (count > 0)
        setCount(count - 1)
    }

    return (
        <div classaName="iCountContainer">
            <div className="countContainer">
                <Button Text="-" Evt={handleOnSubstract}/>
                <p>{count}</p>
                <Button Text="+" Evt={handleOnADdd}/>
            </div>
            <div>
            <Button  Text="Añadir al carrito" Evt={() => onAddToCart(count)}></Button>
            </div>
        </div>
    )
}

export default ItemCount