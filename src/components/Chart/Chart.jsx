import React from 'react';
import './Chart.css'
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map((data) => data.value)
    const totalMix = Math.max(...dataPointsValues)
    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMix}
                label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;