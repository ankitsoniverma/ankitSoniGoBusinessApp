import { Component } from "react";
import Cookies from 'js-cookie'
import './index.css'
import ListForReferral from '../ListForReferral'
import {Link} from 'react-router-dom'
import Header from '../Header'
class ReferalDetail extends Component{
    state={detailData: []}

    componentDidMount(){
        this.getDetails()
    }
    getDetails = async () => {
        const {match} = this.props
        const {params} = match
        const {id} = params 
        const jwtToken = Cookies.get('jwt_token')
        const apiUrl = `https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals?id=${id}`
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
            method: 'GET',
        }
        const response = await fetch(apiUrl, options)
        const data = await response.json()
        console.log(data)
        this.setState({detailData : data.data.referrals})

    }

    render(){
        const {detailData} = this.state
        console.log(detailData)
        
        return(
            <>
            <Header />
            <div className="main-refrrel-detail">
                
                
                <div className="margin">
                <Link to="/" className="link" > Back to dashboard </Link>
                <h1 className="detailRefHead">Referral Details</h1>
                <p>Full information for this referral partner.</p>
                <div className="full-referral-card">
                    
                    <ul className="ul-li">
                        {detailData.map((eachDet) => (
                            <ListForReferral key={eachDet.id} dataDet={eachDet} />
                        ) )}
                    </ul>
                </div>
                </div>
            </div>
        </>
        )
    }
}

export default ReferalDetail