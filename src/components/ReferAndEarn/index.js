import './index.css'

const ReferAndEarn = (props) => {
    const {data} = props
    const {code,link} = data 
    return(
        <>
        <li className="refer-card">
            <label htmlFor="refer-link" className="refer-label">YOUR REFERRAL LINK</label>
            <div>
                <input type="text" id="refer-link" value={link} readOnly className="refer-input"/>
                <button type="button" className="refer-button">COPY</button>
            </div>
        </li>
        <li className="refer-card">
            <label htmlFor="refer-code" className="refer-label">YOUR REFERRAL CODE</label>
            <div>
                <input type="text" id="refer-code" value={code} readOnly className="refer-input"/>
                <button type="button" className="refer-button">COPY</button>
            </div>
        </li>
    </>
    )
}

export default ReferAndEarn