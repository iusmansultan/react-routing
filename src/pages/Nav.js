import { Link, withRouter } from 'react-router-dom';

const Nav = (props) => {
    const navStyle = {
        color: 'white',
        linkStyle: 'none'
    }

    const aboutUs = () => {
        props.history.push('/about')
    }
    const contactUs = () => {
        props.history.push('/contact')
    }
    return (
        <div className='nav'>
            <Link style={navStyle} to="/"><h1>Logo</h1></Link>
            <ul className="nav-links">
                <li>
                    <button className='btn' onClick={aboutUs}>About Us</button>
                </li>
                <li>
                    <button className='btn' onClick={contactUs}>Contact Us</button>
                </li>
            </ul>

        </div>
    )
}

export default withRouter(Nav);
