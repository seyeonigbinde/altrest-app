import React from 'react';
import altrestlogo2 from '../images/altrestlogo2.png';
import { Route, Switch, Link } from "react-router-dom";
// import { axiosWithAuth }from '../utils/axiosWithAuth'

import Maintenance from './Maintenance'
import MaintenanceForm from './MaintenanceForm'
import MaintenanceList from './MaintenanceList'
import DashFooter from './DashFooter';

const Dashboard = () => {

    const logOut = () => {
        // axiosWithAuth().post('/logout')
        // .then(()=> {
        localStorage.removeItem("token");
        window.location.href = "/";
        // })
        // .catch(err=> {
        //   console.log(err);
        // })
    };

    return (
        <section>
            <header>
                <div className="logo">
                    <Link to='/dashboard'><img src={altrestlogo2} alt="logo" /></Link>
                </div>
                {/* <div className="links">
                    <Link><b>Make Payment</b></Link>
                    <Link to='/maintenanceform'><b>Add Request</b></Link>
                </div>
                <div className="login">
                    <button className="btn btn-primary" onClick={logOut}>Logout</button>
                </div> */}
            </header>
            <section>
                <section className="the_dashboard">
                    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: 280 }}>
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#speedometer2" /></svg>
                            <span className="fs-4">Dashboard</span>
                        </a>
                        <hr />
                        <ul className="nav nav-pills flex-column mb-auto align-items-start">
                            <li className="nav-item">
                                <Link to='/dashboard' className="nav-link active" aria-current="page">
                                    <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home" /></svg>
                                    My Request
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/maintenanceform' className="nav-link text-white">
                                    <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2" /></svg>
                                    Add Request
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="nav-link text-white">
                                    <svg className="bi me-2" width="16" height="16"><use xlinkHref="#collection" /></svg>
                                    Make Payment
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="nav-link text-white">
                                    <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid" /></svg>
                                    My Documents
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="nav-link text-white">
                                    <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle" /></svg>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <hr />
                        <div className="dropdown">
                            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://avatars.githubusercontent.com/u/79403650?v=4" alt="" width="32" height="32" class="rounded-circle me-2" />
                                <strong>Profile</strong>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                <li><a className="dropdown-item" href="#">Contact Us</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" onClick={logOut}>Sign out</Link></li>
                            </ul>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path='/dashboard'>
                            <MaintenanceList />
                        </Route>
                        <Route path='/dashboard/maintenance'>
                            <Maintenance />
                        </Route>
                        <Route path='/dashboard/maintenanceform'>
                            <MaintenanceForm />
                        </Route>
                    </Switch>
                    
                </section>
            </section>
            <DashFooter/>
        </section>


    )

}

export default Dashboard;
