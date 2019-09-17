import axios, { } from 'axios';
import moment, { } from 'moment';

export default function getArrRateAndArrDateCurrencyInRange(idCurrency, start, end) {
  const startDate = moment(start).format('YYYY-M-D');
  const endDate = moment(end).format('YYYY-M-D');

  return axios.get(`https://www.nbrb.by/API/ExRates/Rates/Dynamics/${idCurrency}?startDate=${startDate}&endDate=${endDate}`)

    .then(baseCurrencyRange => {
      const baseRangeDate = [];
      const baseRangeRate = [];

      baseCurrencyRange.data.forEach(element => {
        baseRangeDate.push(moment(element.Date).format('  DD MMM YYYY  '));
        baseRangeRate.push(element.Cur_OfficialRate);
      });

      return [baseRangeDate, baseRangeRate];
    });
}
