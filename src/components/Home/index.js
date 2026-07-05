import {Component} from 'react';
import './index.css';
import Cookies from 'js-cookie'
import OverviewCard from '../OverviewCard';
import Service from '../Service'
import ReferAndEarn from '../ReferAndEarn';
import Header from '../Header';
import {Redirect} from 'react-router-dom'
import Footer from '../Footer';
import AllRefrelITems from '../AllRefrelITems'
class Home extends Component {
    state ={
        overviewData: [],
        serviceData : {},
        referData : {},
        referrals : [],
        search: ""

    }
    componentDidMount() {
        this.getDetails()
    }
    getDetails = async () => {
        const {search} = this.state
        const jwtToken = Cookies.get('jwt_token')
        const apiUrl = `https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals?search=${search}`
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
            method: 'GET',
        }
        const response = await fetch(apiUrl, options)
        const data = await response.json()
        console.log(data)
        console.log(data.data.referrals)
        this.setState({overviewData: data.data.metrics})
        this.setState({serviceData: data.data.serviceSummary})
        this.setState({referData: data.data.referral})
        this.setState({referrals : data.data.referrals})
    }
    newFetch = async () => {
        const {search} = this.state
        const jwtToken = Cookies.get('jwt_token')
        const apiUrl = `https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals?search=${search}`
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
            method: 'GET',
        }
        const response = await fetch(apiUrl, options)
        const data = await response.json()
        console.log(data.data.referrals)
        this.setState({referrals : data.data.referrals})
    }
    seachInList = (event) => {
        this.setState({search : event.target.value})
        this.newFetch()
    }

    render(){
        const {overviewData,serviceData,referData, referrals,search} = this.state
        console.log(serviceData)
        console.log(referrals)
        console.log(search)
        const jwtToken = Cookies.get('jwt_token')
        console.log(jwtToken)
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
                <div className="all-referrals-container">
                    <h2 className="referral-heading">All Referrals</h2>
                    <div className="all-referral-input-container">
                        <div>
                            <label htmlFor="search" className="search-label">Search</label>
                            <input type="text" id="search" className="search-input" onChange={this.seachInList} />
                        </div>
                        <div>
                            <label htmlFor="filter" className="filter-label">Filter</label>
                            <select id="filter" className="filter-select">
                                <option value="Newest First">Newest First</option>
                                <option value="Oldest First">Oldest First</option>
                            </select>
                        </div>
                    </div>
                    <div className='all-refral-top-heading'>
                        <p className="sub-heading">
                            NAME
                        </p>
                        <p className="sub-heading">
                            SERVICE
                        </p>
                        <p className="sub-heading">
                            DATE
                        </p>
                        <p className="sub-heading">
                            PROFIT
                        </p>
                    </div>
                    <ul className='ul-all-refral'>
                        {
                            referrals.map((eachITem) => (
                                <AllRefrelITems dataNew={eachITem} />
                            ))
                        }
                    </ul>
                </div>
            </div>
            <Footer />
        </>
        )
    }
}

export default Home