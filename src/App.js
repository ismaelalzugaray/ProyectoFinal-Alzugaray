import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import CartWidget from "./components/CartWidget/CartWidget"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetaiLContainer from "./components/ItemDetailContainer/ItemDetailContainer"




function App () {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path ="/category/:categoryid" element={<ItemListContainer/>}/>
        <Route path="/item/:itemid" element= {<ItemDetaiLContainer/>}/>

        <Route path="*" element={<h1>404: PAGE NOT FOUND</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App