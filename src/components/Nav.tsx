import { NavLink } from "react-router-dom"
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
                <li><NavLink to="/default" style={({ isActive }) => (styleActiveLink(isActive))}>About</NavLink></li>
                <li><NavLink to="/default" style={({ isActive }) => (styleActiveLink(isActive))}>Menu</NavLink></li>
                <li><NavLink to="/default" style={({ isActive }) => (styleActiveLink(isActive))}>Reservations</NavLink></li>
                <li><NavLink to="/default" style={({ isActive }) => (styleActiveLink(isActive))}>Order Online</NavLink></li>
                <li><NavLink to="/default" style={({ isActive }) => (styleActiveLink(isActive))}>Login</NavLink></li>
                <li> <img className="basketIcon" src={basketIcon} alt="Basket" /> </li>
            </ul>
        </nav>
    )
}
export default Nav