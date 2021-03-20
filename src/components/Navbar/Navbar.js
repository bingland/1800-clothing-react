import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

    return (
        <div className="Navbar">
            <Link to="/" class="logo">1800s Clothing</Link>
            <Link to="/books" class="navlink">View Books</Link>
            <Link to="/costumes" class="navlink">View Costumes</Link>
        </div>
    )
}

export default Navbar