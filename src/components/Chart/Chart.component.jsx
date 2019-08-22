import React, { Component } from "react";
import { Line } from 'react-chartjs-2';
import moment, { } from "moment";
import { Route, Switch } from 'react-router-dom';

import Datepicker from "../Datepicker/Datepicker.component.jsx";

import './Chart.styles.css';

import { getArrRateArrDateCurrencyInRange } from "../../service/getArrRateArrDateCurrencyInRange.js";

class Chart extends Component {

  state = {
    BaseRangeDate: [],
    BaseRangeRate: [],
    FromDate: new Date().setDate(new Date().getDate() - 14),
    EndDate: new Date(),
  }

  componentDidMount() {

    if (this.props.SelectedCurrencyID) {
      getArrRateArrDateCurrencyInRange(this.props.SelectedCurrencyID, this.state.FromDate, this.state.EndDate)
        .then(response => {
          this.setState({ BaseRangeDate: response[0], BaseRangeRate: response[1] })
        });
    }
  }

  componentDidUpdate(prevProps, PrevState) {

    if (prevProps.SelectedCurrencyID !== this.props.SelectedCurrencyID || PrevState.FromDate !== this.state.FromDate || PrevState.EndDate !== this.state.EndDate) {
      getArrRateArrDateCurrencyInRange(this.props.SelectedCurrencyID, this.state.FromDate, this.state.EndDate)
        .then(response => {
          this.setState({ BaseRangeDate: response[0], BaseRangeRate: response[1] })
        });
    }
  }

  render() {

    const data = {
      labels: this.state.BaseRangeDate,

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
          data: this.state.BaseRangeRate,
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
        <Switch>
          <Route exact path={["/", "/currensies"]} render={() => (
            <div className="chart__wrapper-for-datepicker">
              <Datepicker
                title={"From date:"}
                startDate={this.state.FromDate}
                onChange={this.onChangeFromDate}
              />
              <Datepicker
                title={"End date:"}
                startDate={this.state.EndDate}
                onChange={this.onChangeEndDate}
              />
            </div>
          )} />
        </Switch>

        <div className="chart__wrapper">
          <Line
            data={data}
            options={options}
          />
        </div>
      </>
    );
  }

  onChangeFromDate = (date) => {
    this.setState({
      FromDate: date
    });
  }
  onChangeEndDate = (date) => {
    this.setState({
      EndDate: date
    });
  }
}
export default Chart;