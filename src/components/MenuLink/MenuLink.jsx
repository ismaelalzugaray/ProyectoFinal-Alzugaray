import { Link } from "react-router-dom"
function MenuLink(props){
    return (
        <Link>{props.children}</Link>
    )
}

export default MenuLink