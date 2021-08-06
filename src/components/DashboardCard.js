import React from 'react'

function DashboardCard() {
    return (
        <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="dashboardCard">
                <h2>Price Changes</h2>
                <p className="priceIncrease">
                    <span>Increased</span>
                    <span>2 Products</span>
                </p>
                <p className="priceDecrease">
                    <span>Decreased</span>
                    <span>2 Products</span>
                </p>
            </div>
            
        </div>
    )
}

export default DashboardCard
