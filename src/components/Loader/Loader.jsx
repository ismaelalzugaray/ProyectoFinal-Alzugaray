import { Orbit } from "@uiball/loaders";
import "./Loader.css"

export default function Loader(){

    return (
        <div className="loaderContainer">
            <h1>Cargando productos...</h1>
            <h3>Aguarde un momento</h3>
            <Orbit size={35} color="#231F20" />
        </div>
    )
}