import './index.css';
import Cookies from 'js-cookie'
import {Link,useHistory} from 'react-router-dom'
const Header = () => {
    const history = useHistory()
    const onLogout = (props) => {
        Cookies.remove('jwt_token')
        history.replace('/login')
    }

    return(
        <div className="header">
            <div className="header-container">
                <h1>
                    <Link to="/" className='header-heading'>Go Business</Link>
                </h1>
                <div>
                    <button type="button" className="tyr-for-free">Try for free</button>
                    <button type="button" className="logout" onClick={onLogout}>Log Out</button>

                </div>
            </div>
        </div>
    )
}


export default Header