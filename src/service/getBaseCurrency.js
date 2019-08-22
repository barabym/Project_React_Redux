import axios, { } from "axios";
import moment, { } from "moment";

export function getBaseCurrency() {

  let dateYesterday = moment().subtract(1, 'days').format('YYYY-M-D');

  return Promise.all([
    axios.get(`http://www.nbrb.by/API/ExRates/Rates?Periodicity=0`),
    axios.get(`http://www.nbrb.by/API/ExRates/Rates?onDate=${dateYesterday}&Periodicity=0`),
  ])
    .then(([baseCurrencyNow, baseCurrencyYesterday]) => {
      const baseCurrencyForList = baseCurrencyNow.data.map((Obj, i) => {
        return {
          ID: Obj.Cur_ID,
          Abbr: Obj.Cur_Abbreviation,
          Scale: Obj.Cur_Scale,
          Rate: Obj.Cur_OfficialRate,
          Diff: +(Obj.Cur_OfficialRate - baseCurrencyYesterday.data[i].Cur_OfficialRate).toFixed(4),
          SymbolCur: getSumbolCurr(Obj.Cur_Abbreviation),
        }
      })
      
      return baseCurrencyForList;
    })
}

function getSumbolCurr(Abbr) {
  let objSymbolCur = {
    AUD: "$", BGN: "лв", UAH: "₴", DKK: "kr", USD: "$", EUR: "€", PLN: "zł", IRR: "﷼", ISK: "kr",
    JPY: "¥", CAD: "$", CNY: "¥", KWD: "د.ك", MDL: "¤", NZD: "₴", NOK: "kr", RUB: "₽", XDR: "¤",
    SGD: "₴", KGS: "¤", KZT: "₸", TRY: "₺", GBP: "£", CZK: "Kč", SEK: "kr", CHF: "₣",
  }

  return (objSymbolCur[Abbr]) ? objSymbolCur[Abbr] : "¤";
}