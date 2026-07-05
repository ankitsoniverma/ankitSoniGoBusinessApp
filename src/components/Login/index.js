import {Component} from 'react';
import './index.css';
class Login extends Component {

    renderUsernameInputField = () => {
        return(
            <>
                <label htmlfor="username" className="form-label">EMAIL </label>
                <input type="text" id="username" placeholder="you@example.com" className="form-input"/>
            </>
        )
    }
    renderPasswordInputField = () => {
        return(
            <>
                <label htmlfor="password" className="form-label">PASSWORD </label>
                <input type="password" id="password" placeholder="Enter your password" className="form-input"/>
            </>
        )
    }

    render(){
        return(
            <div className="login-main-container">
                
                <form className="login-form-container">
                    <h1 className="form-main-heading">Go Business</h1>
                    <p className="form-sub-heading">Sign in to open your referral dashboard</p>
                    <div className="input-container">
                        {this.renderUsernameInputField()}
                    </div>
                    <div className="input-container">
                        {this.renderPasswordInputField()}
                    </div>
                    <button type="submit" className="login-button">Sign In</button>
                </form>
            </div>
        )
    }
}

export default Login;