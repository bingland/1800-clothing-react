import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

    return (
        <div className="Navbar">
            <div className="wrapper1200">
                <Link to="/" className="logo">1800s Clothing</Link>
                <Link to="/books" className="navlink">View Books</Link>
                <Link to="/costumes" className="navlink">View Costumes</Link>
            </div>
        </div>
    )
}

export default Navbar