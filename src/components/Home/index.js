import {Component} from 'react';
import './index.css';
import Cookies from 'js-cookie'
import OverviewCard from '../OverviewCard';
import Service from '../Service'
import ReferAndEarn from '../ReferAndEarn';
class Home extends Component {
    state ={
        overviewData: [],
        serviceData : {},
        referData : {}
    }
    componentDidMount() {
        this.getDetails()
    }
    getDetails = async () => {
        const jwtToken = Cookies.get('jwt_token')
        const apiUrl = "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals"
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
            method: 'GET',
        }
        const response = await fetch(apiUrl, options)
        const data = await response.json()
        console.log(data)
        this.setState({overviewData: data.data.metrics})
        this.setState({serviceData: data.data.serviceSummary})
        this.setState({referData: data.data.referral})
    }

    render(){
        const {overviewData,serviceData,referData} = this.state
        console.log(serviceData)
        return(
            <div className="home-container">
                <h1 className="home-heading">Referral Dashboard</h1>
                <p className="home-description">Track your referrals, earnings, and partners activity in one place.</p>
                <div className="Overview-container">
                    <h2 className="overview-heading">Overview</h2>
                    <ul className="overview-list">
                        {overviewData.map((item) => (
                            <OverviewCard key={item.id} data={item} />
                        ))}
                    </ul>
                </div>
                <div className="Services-container">
                    <h2 className="overview-heading">Service Summary</h2>
                    <ul className="overview-list">
                        <Service data={serviceData} />
                    </ul>
                </div>
                <div className="ReferSection-container">
                    <h2 className="overview-heading">Refer friends and earn more</h2>
                    <ul className="ul-referSection">
                        <ReferAndEarn data={referData} />
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home