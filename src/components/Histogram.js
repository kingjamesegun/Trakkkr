import React from 'react'
import Histogram from 'react-chart-histogram';

function HistogramCard() {
    const labels = ['2016', '2017', '2018', '2019', '2020', '2021'];
    const data = [324, 45, 672, 323, 653, 376];
    const options = { fillColor: '#EEEEEE', strokeColor: '#20232A' };
    return (
        <div 
            className="histogram" 
            style={{margin: "10% 0", padding: "30px 30px", boxShadow: "0px 2px 2px 2px #E21E3B", borderRadius: "5px"}}
        >
            
            <Histogram
                xLabels={labels}
                yValues={data}
                width='680'
                height='200'
                options={options}
            />
            <h2 style={{fontSize: "18px", textAlign: "center", marginTop: "2%"}}>Representation of Products</h2>
            
        </div>
    )
}

export default HistogramCard;
