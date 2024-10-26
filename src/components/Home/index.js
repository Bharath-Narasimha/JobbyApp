import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div>
      <div className="home-container-1-bg">
        <h1 className="home-lg-header">Find The Job That Fits Your Life</h1>
        <p className="home-lg-para">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button className="home-lg-button">Find Jobs</button>
        </Link>
      </div>

      <div className="home-container-1-sm">
        <h1 className="home-sm-header">Find The Job That Fits Your Life</h1>
        <p className="home-sm-para">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button className="home-sm-button">Find Jobs</button>
        </Link>
      </div>
    </div>
  </>
)

export default Home
