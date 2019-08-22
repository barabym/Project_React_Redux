import React, { Component } from "react";
import { Line } from 'react-chartjs-2';
import moment, { } from "moment";
import { Route } from 'react-router-dom';

import Datepicker from "../Datepicker";

import './Chart.styles.css';

import { getArrRateArrDateCurrencyInRange } from "../../service/getArrRateArrDateCurrencyInRange.js";

class  Chart extends Component {

  state = {
    baseRangeDate: [],
    baseRangeRate: [],
    fromDate: new Date().setDate(new Date().getDate() - 14),
    endDate: new Date(),
  }

  componentDidMount() {

    if (this.props.selectedCurrencyID) {
      getArrRateArrDateCurrencyInRange(this.props.selectedCurrencyID, this.state.fromDate, this.state.endDate)
        .then(response => {
          this.setState({ baseRangeDate: response[0], baseRangeRate: response[1] })
        });
    }
  }

  componentDidUpdate(prevProps, PrevState) {

    if (prevProps.selectedCurrencyID !== this.props.selectedCurrencyID || PrevState.fromDate !== this.state.fromDate || PrevState.endDate !== this.state.endDate) {
      getArrRateArrDateCurrencyInRange(this.props.selectedCurrencyID, this.state.fromDate, this.state.endDate)
        .then(response => {
          this.setState({ baseRangeDate: response[0], baseRangeRate: response[1] })
        });
    }
  }

  onChangeFromDate = (date) => {
    this.setState({
      fromDate: date
    });
  }
  onChangeEndDate = (date) => {
    this.setState({
      endDate: date
    });
  }

  render() {

    const data = {
      labels: this.state.baseRangeDate,

      datasets: [
        {
          // label: 'Temperature',
          fill: true,
          lineTension: 0.2,
          backgroundColor: 'rgba(0, 170, 255, 0.1)',
          borderWidth: 4,
          borderColor: 'rgb(0, 170, 255)',
          borderCapStyle: 'butt',
          // borderDash: [15,10],
          // borderDashOffset: 5.50,
          borderJoinStyle: 'miter',
          pointBorderColor: 'yellow',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 5,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: 'red',
          pointHoverBorderColor: 'yellow',
          pointHoverBorderWidth: 2,
          // pointRadius: 1,
          pointHitRadius: 1,
          data: this.state.baseRangeRate,
        }
      ]
    }

    const options = {
      maintainAspectRatio: false,	// Don't maintain w/h ratio
      legend: { display: false, },
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            // display: false,
            color: "gray",

          },
          // scaleLabel: {
          //   display: true,
          //   labelString: 'Date',
          //   fontColor: "white",
          //   fontSize: 20,
          // },
          ticks: {
            padding: 15,
            // maxRotation:0,
            fontSize: 15,
            fontColor: 'white',
            // autoSkip: false,

          },
        }],
        yAxes: [{
          display: true,
          gridLines: {
            // display: false,
            color: "gray",

          },
          // scaleLabel: {
          //   display: true,
          //   labelString: 'Rate',
          //   fontColor: "white",
          //   fontSize: 20,
          // },
          ticks: {
            padding: 15,
            // maxRotation:0,
            fontSize: 15,
            fontColor: 'white',
            // autoSkip: false,

          },
        }]
      }

      // fontColor: 'red',
      // defaultFontColor:'red',
    }

    return (
      <>
        <Route exact path={["/", "/currensies"]} render={() => (
          <div className="chart__wrapper-for-datepicker">
            <Datepicker
              title={"From date:"}
              startDate={this.state.fromDate}
              onChange={this.onChangeFromDate}
            />
            <Datepicker
              title={"End date:"}
              startDate={this.state.endDate}
              onChange={this.onChangeEndDate}
            />
          </div>
        )} />

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