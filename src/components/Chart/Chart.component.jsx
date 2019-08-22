import React, { Component } from "react";
import { Line } from 'react-chartjs-2';
import { Route } from 'react-router-dom';

import Datepicker from "../Datepicker";

import './Chart.styles.css';

import { getArrRateArrDateCurrencyInRange } from "../../service/getArrRateArrDateCurrencyInRange.js";

class Chart extends Component {

  componentDidMount() {
    const { generalStore, chartStore, setBaseRangeToStore} = this.props;
    if (generalStore.selectedCurrency.ID) {
      getArrRateArrDateCurrencyInRange(generalStore.selectedCurrency.ID, chartStore.fromDate, chartStore.endDate)
        .then(response => {
          setBaseRangeToStore(response);
        });
    }
  }

  componentDidUpdate(prevProps, PrevState) {
    const { setBaseRangeToStore } = this.props;
    if (prevProps.generalStore.selectedCurrency.ID !== this.props.generalStore.selectedCurrency.ID || prevProps.chartStore.fromDate !== this.props.chartStore.fromDate || prevProps.chartStore.endDate !== this.props.chartStore.endDate) {
      getArrRateArrDateCurrencyInRange(this.props.generalStore.selectedCurrency.ID, this.props.chartStore.fromDate, this.props.chartStore.endDate)
        .then(response => {
          setBaseRangeToStore(response);
        });
    }
  }

  onChangeFromDate = (date) => {
    this.props.setFromDateToStore(date)
  }

  onChangeEndDate = (date) => {
    this.props.setEndDateToStore(date)
  }

  render() {
    const data = {
      labels: this.props.chartStore.baseRangeDate,

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
          data: this.props.chartStore.baseRangeRate,
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
              startDate={this.props.chartStore.fromDate}
              onChange={this.onChangeFromDate}
            />
            <Datepicker
              title={"End date:"}
              startDate={this.props.chartStore.endDate}
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