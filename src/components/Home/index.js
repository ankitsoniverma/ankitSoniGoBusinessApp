import {Component} from 'react';
import './index.css';
import Cookies from 'js-cookie'
import OverviewCard from '../OverviewCard';
import Service from '../Service'
import ReferAndEarn from '../ReferAndEarn';
import Header from '../Header';
import {Redirect} from 'react-router-dom'
class Home extends Component {
    state ={
        overviewData: [],
        serviceData : {},
        referData : {}
    }
    componentDidMount() {
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken !== undefined) {
            this.getDetails()
        }
    }
    getDetails = async () => {
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken === undefined) {
            return
        }
        const apiUrl = "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals"
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
            method: 'GET',
        }
        try {
            const response = await fetch(apiUrl, options)
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.message || 'Failed to load referral data')
            }
            this.setState({
                overviewData: data?.data?.metrics || [],
                serviceData: data?.data?.serviceSummary || {},
                referData: data?.data?.referral || {}
            })
        } catch (error) {
            console.error(error)
        }
    }

    render(){
        const {overviewData,serviceData,referData} = this.state
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken === undefined) {
            return <Redirect to="/login" />
        }
        return(
            <>
            <Header />
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
        </>
        )
    }
}

export default Home