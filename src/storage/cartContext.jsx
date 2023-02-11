import { createContext, useState } from "react";
import swal from "sweetalert";

export const cartContext = createContext()

export function CartContextProvider (props) {
    
    let [cart, setCart] = useState([]) 

    function addItem (item){
        const isInCart = cart.some(itemInCart => itemInCart.id === item.id)
        if (isInCart){
            let newCart = cart
            let index = newCart.findIndex(obj => item.id  === item.id)
            newCart[index].count += item.count
            setCart([...newCart])
        }else{
            setCart([...cart, item])
        }

        swal("Producto/s agregados al carrito!",`${item.title} x ${item.count} unidades`);
    }

    function removeItem(itemId){
      let newCart = cart.filter(item => item.id !== itemId)
    
      setCart([...newCart])
      
    }

    function clearCart(){
        let emptyCart = []
        setCart([...emptyCart])
    }


    function getTotalItems() {
        let total = 0
        cart.forEach((item) => total += item.count)
        return total
    }

    function getTotalPrice(){
        let totalPrice = 0
        cart.forEach(item => totalPrice += item.price * item.count)
        return totalPrice
    }


       return (

        <cartContext.Provider value ={{cart, addItem, getTotalItems, removeItem, getTotalPrice, clearCart}}>
            {props.children}
        </cartContext.Provider>
    )
    }

