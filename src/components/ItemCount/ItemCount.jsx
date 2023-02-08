import { useState } from "react"

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
        <div>
            <div>
                <button onClick={handleOnSubstract}>-</button>
                <p>{count}</p>
                <button onClick={handleOnADdd}>+</button>
            </div>
            <div>
                <button onClick={() => onAddToCart(count)}>agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount