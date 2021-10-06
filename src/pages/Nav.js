import { Link } from 'react-router-dom';

const Nav = () => {
    const navStyle = {
        color: 'white',
        linkStyle: 'none'
    }
    return (
        <div className='nav'>
            <Link style={navStyle} to="/"><h1>Logo</h1></Link>
            <ul className="nav-links">
                <Link style={navStyle} to='/about'>
                    <li>About Us</li>
                </Link>
                <Link style={navStyle} to='/contact'>
                    <li>Contact Us</li>
                </Link>
            </ul>

        </div>
    )
}

export default Nav
