import axios, { } from 'axios';
import moment, { } from 'moment';

function getSumbolCurr(Abbr) {
  const objSymbolCur = {
    AUD: '$',
    BGN: 'лв',
    UAH: '₴',
    DKK: 'kr',
    USD: '$',
    EUR: '€',
    PLN: 'zł',
    IRR: '﷼',
    ISK: 'kr',
    JPY: '¥',
    CAD: '$',
    CNY: '¥',
    KWD: 'د.ك',
    MDL: '¤',
    NZD: '₴',
    NOK: 'kr',
    RUB: '₽',
    XDR: '¤',
    SGD: '₴',
    KGS: '¤',
    KZT: '₸',
    TRY: '₺',
    GBP: '£',
    CZK: 'Kč',
    SEK: 'kr',
    CHF: '₣',
  };

  return objSymbolCur[Abbr] || '¤';
}

export default function getBaseCurrency() {
  const dateYesterday = moment().subtract(1, 'days').format('YYYY-M-D');

  return Promise.all([
    axios.get('http://www.nbrb.by/API/ExRates/Rates?Periodicity=0'),
    axios.get(`http://www.nbrb.by/API/ExRates/Rates?onDate=${dateYesterday}&Periodicity=0`),
    axios.get('http://www.nbrb.by/API/ExRates/Currencies'),
  ])
    .then(([baseCurrencyNow, baseCurrencyYesterday, baseCurrencyWithAbbr]) => {
      let listCurrencyAbbr = {};
      baseCurrencyWithAbbr.data.forEach(Obj => {
        listCurrencyAbbr = { ...listCurrencyAbbr, [Obj.Cur_ID]: Obj.Cur_Name_Eng };
      });

      const baseCurrencyForList = baseCurrencyNow.data.map((Obj, i) => ({
        ID: Obj.Cur_ID,
        Abbr: Obj.Cur_Abbreviation,
        Scale: Obj.Cur_Scale,
        Rate: Obj.Cur_OfficialRate,
        Diff: +(Obj.Cur_OfficialRate - baseCurrencyYesterday.data[i].Cur_OfficialRate).toFixed(4),
        SymbolCur: getSumbolCurr(Obj.Cur_Abbreviation),
        EngName: listCurrencyAbbr[Obj.Cur_ID],
      }));

      return baseCurrencyForList;
    });
}
