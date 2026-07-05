import './index.css'

const AllRefrelItems = (props) => {
    const {dataNew } = props
    const {name,serviceName,date,profit} = dataNew
    return(
        <li className="all-refrel-list">
           
            <p className="sub-heading1">{name}</p>
            <p className="sub-heading1">{serviceName}</p>
            <p className="sub-heading1">{date}</p>
            <p className="sub-heading1">{profit}</p>
        </li>
    )
}

export default AllRefrelItems