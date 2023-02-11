import { useState } from "react"
import "./CartForm.css"
import Button from "../Button/Button"


function InputForm(props) {
    
    return (
        <div>
            <label className="formLabel">{props.label}</label>
            <input
                className="formInput"
                type="text" 
                value={props.value}
                name={props.name}
                onChange={props.onInputChange} 
                />
        </div>
    )
}

export default function CartForm(props){
    const [userData, setUserData] = useState({
        Nombre: "",
        Email: "",
        Telefono: "",
    })


function onInputChange(evt){
    const field = evt.target.name;
    const value = evt.target.value;

    const newState = {... userData}
    newState[field] = value
    setUserData(newState)
}

function clearData(){
    setUserData({
        Nombre: "",
        Email: "",
        Telefono: ""
    })
}

function onSubmit(evt){
    evt.preventDefault()
    props.onSubmit(userData)
}

let arrayUserData = Object.keys(userData)


return (
    <form onSubmit={onSubmit}>
        <h1 className="formTitle">Ingresa tus datos para finalizar tu compra</h1>
        {
            arrayUserData.map(field => (
                <InputForm 
                name={field}
                value={userData[field]} 
                onInputChange={onInputChange} 
                label={field}
                />
            ))
        }
        <div className="buttonContainer">
            <Button Text="Finalizar Compra" Evt={onSubmit} Disabled={!(userData.Nombre !== "" &&userData.Telefono !== "" && userData.Email !== "")}></Button>
            <Button Text="Limpiar Formulario" Evt={clearData}></Button>
        </div>
    </form>
)
}
