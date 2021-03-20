import './Navbar.scss'

const Navbar = (props) => {

    return (
        <div className="Navbar">
            <h1>1800s Clothing</h1>
            <div onClick={() => props.setCurrentPage('books')} class="navlink">View Books</div>
            <div onClick={() => props.setCurrentPage('costumes')} class="navlink">View Costumes</div>
        </div>
    )
}

export default Navbar