import './index.css';
import {Link} from 'react-router-dom'
const Footer = () => {
    return(
        <footer className="footer">
            <h1>
                <Link to="/" className='header-heading'>Go Business</Link>
            </h1>
            <ul className="footer-links">
                <li>About</li>
                <li>Contact</li>
                <li>Privacy</li>
                <li>Terms</li>
            </ul>
            <p className="footer-text">© 2024 Go Business. Inc</p>
        </footer>
    )
}

export default Footer