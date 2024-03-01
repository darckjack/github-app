import {Link} from "react-router-dom";

const Navbar = ({icon, title}) => {
    return (
        <nav className="navbar bg-primary">
            <h2><i className={icon}></i> {title}</h2>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar