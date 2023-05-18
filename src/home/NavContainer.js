import { Link, NavLink } from "react-router-dom";
import RegisterUser from "../register/RegisterUser";
import Home from "./Home";
import Sperc from "../SPERC/Sperc";

function NavBar () {

    return (
        <>
            <nav className="NavContainer">
                <NavLink to={Home}><p>Home</p></NavLink>
                <NavLink to={Sperc}><p>SPERC</p></NavLink>
                <NavLink to={RegisterUser}><p>Register</p></NavLink>
            </nav>
        </>
    )
}

export default NavBar ;