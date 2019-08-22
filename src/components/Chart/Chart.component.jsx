import React, { Component } from "react";
import { Line } from 'react-chartjs-2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

import './Chart.styles.css';

function Chart__description(props) {
  if (props.flagDescriptionIsShow) {
    return (
      <div>
        <p>Currency Name: {props.currencyName}</p>
        <p>Currency Abbreviation: {props.currencyAbbreviation}</p>
      </div>
    );
  }
  else return null;
}

function Chart__datepicker(props) {

  if (props.flagDatePickersIsShow) {
    return (
      <div>
        <p className="chart__datepicker-title">{props.title}</p>
        <DatePicker
          selected={props.startDate}
          onChange={props.onChange}
          dateFormat="dd MMMM yyyy"
          className="chart__datepicker"
          maxDate={new Date()}
        />
      </div>
    );
  }
  else return null;
}

class Chart extends Component {

  render() {

    const data = {
      labels: this.props.rangeDate,

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
          data: this.props.rangeRate,
        }
      ]
    }

    const options = {
      maintainAspectRatio: false,
      legend: { display: false, },
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            color: "gray",

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
            color: "gray",
          },
          ticks: {
            padding: 15,
            fontSize: 15,
            fontColor: 'white',
          },
        }]
      }
    }

    return (
      <>
        <div className="chart__wrapper-for-addition">
          <Chart__description
            flagDescriptionIsShow={this.props.flagDescriptionIsShow}
            currencyName={this.props.currencyName}
            currencyAbbreviation={this.props.currencyAbbreviation}
          />
          <Chart__datepicker
            flagDatePickersIsShow={this.props.flagDatePickersIsShow}
            title={"From date:"}
            startDate={this.props.fromDate}
            onChange={this.props.onChangeFromDate}
          />
          <Chart__datepicker
            flagDatePickersIsShow={this.props.flagDatePickersIsShow}
            title={"End date:"}
            startDate={this.props.endDate}
            onChange={this.props.onChangeEndDate}
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
