
import{ Link } from 'react-router-dom'

const Navbar = () => { 
    return (
        <nav className="navbar">
            <h1>The Ini's blog</h1>
            <div className="links">
                <Link to="/"> Home</Link>
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: 'red',
                    borderRadius: '8px',
                }}>New blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;