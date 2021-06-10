import React from 'react'
import Header from '../components/Header';
import Table from '../components/Table';
import '../styles/components/Trakker.css'

function Tracker() {
    return (
        <div className="tracker">
            <Header
            title="Track your product"
            />
            <Table/>
        
        </div>
    )
}

export default Tracker
