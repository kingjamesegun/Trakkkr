import React from 'react'
import DashboardCard from '../components/DashboardCard';
import '../styles/Pages/Dashboard.css'
import HistogramCard from '../components/Histogram';

function Dashboard() {
    return (
        <div className="dashboard container">
            <div className="row">
                <div className= "col-lg-8 col-md-12 col-xs-12">
                    <div className="dashboard__overview">
                        <h1>Overview</h1>
                        <p>last year || 22nd October, 2020.</p>
                    </div>
                    <div className="dashboard__subdivision">
                        <div className="row">
                            <DashboardCard/>
                            <DashboardCard/>
                            <DashboardCard/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <HistogramCard/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
