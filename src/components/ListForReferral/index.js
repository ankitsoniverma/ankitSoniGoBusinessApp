import './index.css'

const ListForReferral = (props) => {
    const {dataDet} = props
    const {id,name,date,profit,serviceName} = dataDet
    return(
        <>
        <li className='li-container '>
        <div className="divli">
            <h1 className="partner-name">{name}</h1>
            <p className='logo-name'>{serviceName}</p>

            </div>
            <hr/>
        <li className='li'>
            <p>REFERRAL ID</p>
            <p className="dark">{id}</p>
        </li>
        <hr/>
        <li className='li'>
            <p>NAME</p>
            <p className="dark">{name}</p>
        </li>
        <hr/>
        <li className='li'>
            <p>SERVICE NAME</p>
            <p className="dark">{serviceName}</p>
        </li>
        <hr/>
        <li className='li'>
            <p>DATE</p>
            <p className="dark">{date}</p>
        </li>
        <hr/>
        <li className='li'>
            <p>PROFIT</p>
            <p className="dark">{profit}</p>
            
        </li>
        </li>
        </>
    )
}

export default ListForReferral