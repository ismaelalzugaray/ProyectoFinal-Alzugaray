import { useState } from "react"

function InputForm(props) {
    return (
        <div>
            <label>{props.label}</label>
            <input 
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
        name: "",
        email: "",
        phone: "",
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
        name: "",
        email: "",
        phone: ""
    })
}

function onSubmit(evt){
    evt.preventDefault()
    props.onSubmit(userData)
}

let arrayUserData = Object.keys(userData)

return (
    <form onSubmit={onSubmit}>
        <h1>Ingresa tus datos para finalizar la compra</h1>
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
        <button
        disable={
            !(
                userData.name !== "" &&
                userData.phone !== "" &&
                userData.email !== ""
            )
        }
        type="submit"
        >
            Crear Orden
        </button>
        <button onClick={clearData}>Limpiar Campos</button>
    </form>
)
}
