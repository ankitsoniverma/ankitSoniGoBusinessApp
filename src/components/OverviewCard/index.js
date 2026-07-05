import './index.css';

const OverviewCard = (props) => {
    const { data } = props
    const {label,value} = data
    return(
        <li className="overview-card">
            <p className="overview-card-heading">{value}</p>
            <p className="overview-card-description">{label}</p>
            
        </li>
    )
}

export default OverviewCard