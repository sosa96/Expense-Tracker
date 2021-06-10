import './Chart.css';

import ChartBar from './ChartBar';

const Chart = props => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); // transforming dataPoint object to number
  const totalMaximum = Math.max(...dataPointValues); // find biggest value of months

  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
