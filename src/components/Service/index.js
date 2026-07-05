import './index.css';

const Service = (props) => {
    const { data } = props
    const {yourReferrals,activeReferrals,totalRefEarnings,service} = data
    return(
        <>
        <li className="overview-card1">
            <p className="overview-card-description">SERVICE</p>
            <p className="overview-card-heading"><span className="card-label">{service}</span></p>
            
        </li>
        <li className="overview-card1">
            <p className="overview-card-description">YOUR REFERRALS</p>
            <p className="overview-card-heading">{yourReferrals}</p>
        </li>
        <li className="overview-card1">
            <p className="overview-card-description">ACTIVE REFERRALS</p>
            <p className="overview-card-heading">{activeReferrals}</p>
        </li>
        <li className="overview-card1">
            <p className="overview-card-description">TOTAL EARNINGS</p>
            <p className="overview-card-heading">{totalRefEarnings}</p>
        </li>
    </>
    )


}

export default Service