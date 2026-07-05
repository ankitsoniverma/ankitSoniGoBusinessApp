import './index.css'
import { Link } from 'react-router-dom'
const AllRefrelItems = (props) => {
    const {dataNew } = props
    const {id,name,serviceName,date,profit} = dataNew
    return(
        <Link to={`/id/${id}`} className="item-link">
            <li className="all-refrel-list">
            
                <p className="sub-heading1">{name}</p>
                <p className="sub-heading1">{serviceName}</p>
                <p className="sub-heading1">{date}</p>
                <p className="sub-heading1">{profit}</p>
            </li>
        </Link>
    )
}

export default AllRefrelItems