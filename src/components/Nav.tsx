import { NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link";
import logoLittleLemon from "../assets/Logo.svg"
import basketIcon from "../assets/Basket.svg"


function Nav() {

    const styleActiveLink = (isActive: boolean) => {
        return { color: isActive ? 'black' : 'black' }
    }
    return (
        <nav className="ui-nav">
            <ul className="ui-ul">
                <li> <img src={logoLittleLemon} alt="Little Lemon Logo" /> </li>
                <li><NavLink to="/" style={({ isActive }) => (styleActiveLink(isActive))}>Home</NavLink></li>
                <li><HashLink to="/#about">About</HashLink></li>
                <li><HashLink to="/#highlights">Menu</HashLink></li>
                <li><HashLink to="/reservation">Reservations</HashLink></li>
                <li><HashLink to="/">Order Online</HashLink></li>
                <li><HashLink to="/">Login</HashLink></li>
                <li> <img className="basketIcon" src={basketIcon} alt="Basket" /> </li>
            </ul>
        </nav>
    )
}
export default Nav