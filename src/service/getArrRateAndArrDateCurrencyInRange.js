import axios, { } from "axios";
import moment, { } from "moment";

export function getArrRateAndArrDateCurrencyInRange(idCurrency, startDate, endDate) {
// alert (idCurrency+" "+startDate+" "+endDate);
  startDate = moment(startDate).format("YYYY-M-D");
  endDate = moment(endDate).format("YYYY-M-D");

  return axios.get(`http://www.nbrb.by/API/ExRates/Rates/Dynamics/${idCurrency}?startDate=${startDate}&endDate=${endDate}`)

    .then((baseCurrencyRange) => {

      let baseRangeDate = [];
      let baseRangeRate = [];

      baseCurrencyRange.data.forEach(element => {
        baseRangeDate.push(moment(element.Date).format("  DD MMM YYYY  "));
        baseRangeRate.push(element.Cur_OfficialRate);
      });
      // alert (baseRangeDate+"---"+baseRangeRate);
      return [baseRangeDate, baseRangeRate];
    })
}