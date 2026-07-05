import './index.css'
import {Link} from 'react-router-dom'
const NotFound = () => {
    return(
        <div className="pageNotFound">
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/" className="link">Back to dashboard</Link>
        </div>
    )
}

export default NotFound