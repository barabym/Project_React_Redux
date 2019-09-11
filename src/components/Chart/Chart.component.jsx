import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './Chart.styles.css';

function ChartDescription(props) {
  const { flagDescriptionIsShow, currencyName, currencyAbbreviation } = props;
  if (flagDescriptionIsShow) {
    return (
      <div className="chart__wrapper-for-description">
        <p>
          Currency Name:
          {' '}
          {currencyName}
        </p>
        <p>
          Currency Abbreviation:
          {' '}
          {currencyAbbreviation}
        </p>
      </div>
    );
  }
  return null;
}

function ChartDatePicker(props) {
  const {
    flagDatePickersIsShow, title, startDate, onChange,
  } = props;

  if (flagDatePickersIsShow) {
    return (
      <div>
        <p className="chart__datepicker-title">{title}</p>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          dateFormat="dd MMMM yyyy"
          className="chart__datepicker"
          maxDate={new Date()}
        />
      </div>
    );
  }
  return null;
}

class Chart extends Component {
  render() {
    const {
      rangeDate, rangeRate,
      flagDescriptionIsShow, flagDatePickersIsShow,
      currencyName, currencyAbbreviation,
      fromDate, endDate, onChangeFromDate, onChangeEndDate,
    } = this.props;

    const data = {
      labels: rangeDate,

      datasets: [
        {
          fill: true,
          lineTension: 0.2,
          backgroundColor: 'rgba(0, 170, 255, 0.1)',
          borderWidth: 4,
          borderColor: 'rgb(0, 170, 255)',
          borderCapStyle: 'butt',
          borderJoinStyle: 'miter',
          pointBorderColor: 'yellow',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 5,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: 'red',
          pointHoverBorderColor: 'yellow',
          pointHoverBorderWidth: 2,
          pointHitRadius: 1,
          data: rangeRate,
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      legend: { display: false },
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            color: 'gray',

          },
          ticks: {
            padding: 15,
            fontSize: 15,
            fontColor: 'white',
          },
        }],
        yAxes: [{
          display: true,
          gridLines: {
            color: 'gray',
          },
          ticks: {
            padding: 15,
            fontSize: 15,
            fontColor: 'white',
          },
        }],
      },
    };

    return (
      <>
        <div className="chart__wrapper-for-addition">
          <ChartDescription
            flagDescriptionIsShow={flagDescriptionIsShow}
            currencyName={currencyName}
            currencyAbbreviation={currencyAbbreviation}
          />
          <ChartDatePicker
            flagDatePickersIsShow={flagDatePickersIsShow}
            title="From date:"
            startDate={fromDate}
            onChange={onChangeFromDate}
          />
          <ChartDatePicker
            flagDatePickersIsShow={flagDatePickersIsShow}
            title="End date:"
            startDate={endDate}
            onChange={onChangeEndDate}
          />
        </div>
        <div className="chart__wrapper">
          <Line
            data={data}
            options={options}
          />
        </div>
      </>
    );
  }
}
export default Chart;
