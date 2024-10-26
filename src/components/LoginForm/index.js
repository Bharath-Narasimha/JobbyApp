import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showError: false, errorMsg: ''}

  changeText = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {errorMsg, username, password, showError} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="loginform-container">
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="loginform-img"
          />
          <label htmlFor="textEle">USERNAME</label>
          <input
            type="text"
            placeholder="Username"
            className="input-ele"
            id="textEle"
            onChange={this.changeText}
            value={username}
          />
          <label htmlFor="passEle">PASSWORD</label>
          <input
            type="password"
            placeholder="Password"
            className="input-ele"
            id="passEle"
            onChange={this.changePassword}
            value={password}
          />
          <button className="login-button" type="submit">
            Login
          </button>
          {showError && <p className="error_msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
