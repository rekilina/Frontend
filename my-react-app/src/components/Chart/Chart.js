import React from 'react';
import "./Chart.css"
import ChartBar from './ChartBar';

const Chart = (props) => {
	const totalMax = Math.max(...props.dataPoints.map(item => item.value));
	return (
		<div className='chart'>
			{
				props.dataPoints.map(dataPoint => {
					return (
						<ChartBar
							key={dataPoint.label}
							value={dataPoint.value}
							maxValue={totalMax}
							label={dataPoint.label}
						/>
					)
				})
			}
		</div>
	);
}

export default Chart;