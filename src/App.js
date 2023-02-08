import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetaiLContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {CartContextProvider} from "./storage/cartContext"
import CartContainer from "./components/CartContainer/CartContainer"
import { exportData, getItemByCategory, getSingleItem } from "./services/FireBase"



function App () {


  return (
    <CartContextProvider>
      <button onClick ={exportData}>Export Data</button>
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path ="/category/:categoryid" element={<ItemListContainer/>}/>
          <Route path="/item/:itemid" element= {<ItemDetaiLContainer/>}/>
          <Route path ="/cart" element={<CartContainer/>}/>
          <Route path="*" element={<h1>404: PAGE NOT FOUND</h1>}/>
        </Routes>

      </BrowserRouter>

    </CartContextProvider>
  )
}

export default App