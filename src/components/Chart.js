import React from 'react';
import Chart from 'react-apexcharts';

function ChartElement({ options, series }) {

    return (
        <div style={{ overflow: 'hidden', borderTopLeftRadius: 5 }}>
            <Chart options={options} series={series} type='line' width={1000} height={462}/>
        </div>
    );
}

export default ChartElement;