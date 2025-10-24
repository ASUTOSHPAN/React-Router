import { Link } from "react-router";
import "./navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/"><h2>Logo</h2></Link>
            </div>
            <div className="links">
                <Link to="/home" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/login" >Login</Link>
            </div>
        </div>
    )
}
export default Navbar;