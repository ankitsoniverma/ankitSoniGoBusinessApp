import {Component} from 'react';
import './index.css';
import Cookies from 'js-cookie';
class Login extends Component {
    state = {
        Email: "",
        password: "",
        showSubmitError: false,
        errorMsg: ""
    }
    onChangeUsername = event => {
        this.setState({Email: event.target.value})
    }

    onChangePassword = event => {
        this.setState({password: event.target.value})
    }
    onSubmitSuccess = jwtToken => {
        

        Cookies.set('jwt_token', jwtToken, {
            expires: 30,
            path: '/',
        })
    }
    onSubmitFailure = errorMsg => {
        console.log(errorMsg)
        this.setState({showSubmitError: true, errorMsg})
    }
    onSubmitForm = async (event) => {
        event.preventDefault()
        const {Email, password} = this.state
        console.log(Email, password)
        const userDetails = {email: Email, password}
        const url = "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin"
        const options = {
            method : "POST",
            body : JSON.stringify(userDetails)
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        console.log(data.data.token)
        if (response.ok === true) {
            this.onSubmitSuccess(data.data.token)
        } else {
            this.onSubmitFailure(data.message)
        }
    }

    renderUsernameInputField = () => {
        return(
            <>
                <label htmlfor="username" className="form-label">EMAIL </label>
                <input type="text" id="username" placeholder="you@example.com"
                    onChange={this.onChangeUsername}
                    value={this.state.Email}
                 className="form-input"/>
            </>
        )
    }
    renderPasswordInputField = () => {
        return(
            <>
                <label htmlfor="password" className="form-label">PASSWORDd </label>
                <input type="password" id="password" placeholder="Enter your password" 
                    onChange={this.onChangePassword}
                    value={this.state.password}
                    className="form-input"/>
            </>
        )
    }

    render(){
        const {Email,password } = this.state
        
        console.log(Email,password)
        return(
            <div className="login-main-container">
                
                <form className="login-form-container" onSubmit={this.onSubmitForm}>
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