import axios, { } from "axios";
import moment, { } from "moment";

export function getArrRateArrDateCurrencyInRange(IdCurrency, StartDate, EndDate) {

  StartDate = moment(StartDate).format("YYYY-M-D");
  EndDate = moment(EndDate).format("YYYY-M-D");

  return axios.get(`http://www.nbrb.by/API/ExRates/Rates/Dynamics/${IdCurrency}?startDate=${StartDate}&endDate=${EndDate}`)

    .then((BaseCurrencyRange) => {

      let BaseRangeDate = [];
      let BaseRangeRate = [];

      BaseCurrencyRange.data.forEach(element => {
        BaseRangeDate.push(moment(element.Date).format("  DD MMM YYYY  "));
        BaseRangeRate.push(element.Cur_OfficialRate);
      });

      return [BaseRangeDate, BaseRangeRate];
    })
}