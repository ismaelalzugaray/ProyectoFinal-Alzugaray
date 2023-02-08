import React from "react"
import { cartContext } from "../../storage/cartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { createBuyOrder } from "../../services/FireBase"
import CartForm from "../CartContainer/CartForm"

function CartContainer(){
  const {cart, removeItem, getTotalPrice, clearCart} = useContext(cartContext)

  async function handleCheckOut(userData){


    const item = cart.map(product => ({
        id: product.id, 
        title: product.title, 
        price: product.price, 
        count: product.count
    }))

    const order = {
        buyer: {userData},
        items: item,
        date: "",
        total: getTotalPrice()

    }
    console.log(order)
    let id = await createBuyOrder(order)
  }

  if (cart.length === 0){
    return (
        <div>
            <h1>No hay productos</h1>
            <Link to="/"><button>Ir a Home</button></Link>
        </div>
        )
  }

    return(
        <div>
            <table>
                <thead>
                    <td>Nombre</td>
                    <td>Precio</td>
                    <td>Cantidad</td>
                    <td>Eliminar Producto</td>
                </thead>
          {cart.map(item => (
            <tr>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>{item.count}</td>
                <td><button onClick={() => removeItem(item.id)}>X</button></td>
            </tr>
          ))}
            </table>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <small>El precio total de su compra es ${getTotalPrice()}</small>
            <CartForm onSubmit={handleCheckOut}/>
        </div>
    )
}
    export default CartContainer