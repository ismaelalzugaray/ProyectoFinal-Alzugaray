import { createContext, useState } from "react";

export const cartContext = createContext()

export function CartContextProvider (props) {
    
    let [cart, setCart] = useState([]) 

    function addItem (item){
        const isInCart = cart.some(itemInCart => itemInCart.id === item.id)
        if (isInCart){
            let newCart =[...cart];
            let index = cart.findIndex(itemInCart => itemInCart.id === item.id)
        }else{
            setCart([...cart, item])
        }
    }

    function removeItem(itemId){
    
    }

    function clearCart(){
        let emptyCart = []
        setCart([emptyCart])
    }

    function buyCart(){
        ///aca iria un sweet alert///
        let emptyCart = []
        setCart([emptyCart])
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

