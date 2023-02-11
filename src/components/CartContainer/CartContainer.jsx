import React from "react"
import { cartContext } from "../../storage/cartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { createBuyOrder } from "../../services/FireBase"
import CartForm from "../CartContainer/CartForm"
import "./CartContainer.css"
import Button from "../Button/Button"
import swal from 'sweetalert';


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
        date: new Date(),
        total: getTotalPrice()
    }
    let id = await createBuyOrder(order)

    
    swal({
        title: "Good job!",
        text: `Su orden de compra es: ${id}`,
        icon: "success",
        button: "¡Genial!",
    });

    clearCart()

  }

  if (cart.length === 0){
    return (
        <div className="noProducts">
            <h1>No hay productos en el carrito</h1>
            <Button Ruta="/"Text="Ir a inicio"/>
        </div>
        )
  }

    return(
        <div className="container">
            <div className="tableContainer">

                <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Eliminar Producto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.count}</td>
                                    <td>${item.price}</td>
                                    <td className="buttonTd"><Button Text="X" Evt={() => removeItem(item.id)}/>
                                        </td>
                                </tr>
                            ))}
                        </tbody>
                </table>
                <Button Evt={clearCart} Text="Vaciar Carrito"/>
                <p>El precio total de su compra es <span>${getTotalPrice()}</span></p>
            </div>
            <div>
                <CartForm onSubmit={handleCheckOut}/>
            </div>
        </div>
    )
}
    export default CartContainer