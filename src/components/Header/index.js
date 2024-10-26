import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {MdHome} from 'react-icons/md'
import {BiBriefcase} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="header-container">
      <div className="header-lg-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
        <ul className="header-lg-sub-1">
          <Link to="/" className="nav-link">
            <li className="header-lg-li">Home</li>
          </Link>
          <Link to="/jobs" className="nav-link">
            <li className="header-lg-li">Jobs</li>
          </Link>
        </ul>
        <div>
          <button className="header-button-lg" onClick={onLogout} type="button">
            Logout
          </button>
        </div>
      </div>
      <div className="header-sm-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
        <ul className="header-sm-sub-1">
          <Link to="/">
            <li>
              <MdHome className="icon" />
            </li>
          </Link>
          <Link to="/jobs">
            <li>
              <BiBriefcase className="icon" />
            </li>
          </Link>
          <li>
            <button className="logout-btn-sm" onClick={onLogout}>
              <FiLogOut className="icon" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default withRouter(Header)
