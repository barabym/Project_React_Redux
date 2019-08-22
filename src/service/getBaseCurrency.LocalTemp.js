import axios, { } from "axios";
import moment, { } from "moment";

export function getBaseCurrency() {

  let DateYesterday = moment().subtract(1, 'days').format('YYYY-M-D');
  let BaseCurrencyNow = [
    {
      "Cur_ID": 170,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "AUD",
      "Cur_Scale": 1,
      "Cur_Name": "Австралийский доллар",
      "Cur_OfficialRate": 1.444
    },
    {
      "Cur_ID": 191,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "BGN",
      "Cur_Scale": 1,
      "Cur_Name": "Болгарский лев",
      "Cur_OfficialRate": 1.1909
    },
    {
      "Cur_ID": 290,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "UAH",
      "Cur_Scale": 100,
      "Cur_Name": "Гривен",
      "Cur_OfficialRate": 7.8257
    },
    {
      "Cur_ID": 291,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "DKK",
      "Cur_Scale": 10,
      "Cur_Name": "Датских крон",
      "Cur_OfficialRate": 3.1196
    },
    {
      "Cur_ID": 145,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "USD",
      "Cur_Scale": 1,
      "Cur_Name": "Доллар США",
      "Cur_OfficialRate": 2.0879
    },
    {
      "Cur_ID": 292,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "EUR",
      "Cur_Scale": 1,
      "Cur_Name": "Евро",
      "Cur_OfficialRate": 2.3278
    },
    {
      "Cur_ID": 293,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "PLN",
      "Cur_Scale": 10,
      "Cur_Name": "Злотых",
      "Cur_OfficialRate": 5.4142
    },
    {
      "Cur_ID": 303,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "IRR",
      "Cur_Scale": 100000,
      "Cur_Name": "Иранских риалов",
      "Cur_OfficialRate": 4.9712
    },
    {
      "Cur_ID": 294,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "ISK",
      "Cur_Scale": 100,
      "Cur_Name": "Исландских крон",
      "Cur_OfficialRate": 1.6793
    },
    {
      "Cur_ID": 295,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "JPY",
      "Cur_Scale": 100,
      "Cur_Name": "Йен",
      "Cur_OfficialRate": 1.9105
    },
    {
      "Cur_ID": 23,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "CAD",
      "Cur_Scale": 1,
      "Cur_Name": "Канадский доллар",
      "Cur_OfficialRate": 1.5452
    },
    {
      "Cur_ID": 304,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "CNY",
      "Cur_Scale": 10,
      "Cur_Name": "Китайских юаней",
      "Cur_OfficialRate": 3.022
    },
    {
      "Cur_ID": 72,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "KWD",
      "Cur_Scale": 1,
      "Cur_Name": "Кувейтский динар",
      "Cur_OfficialRate": 6.8601
    },
    {
      "Cur_ID": 296,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "MDL",
      "Cur_Scale": 10,
      "Cur_Name": "Молдавских леев",
      "Cur_OfficialRate": 1.1519
    },
    {
      "Cur_ID": 286,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "NZD",
      "Cur_Scale": 1,
      "Cur_Name": "Новозеландский доллар",
      "Cur_OfficialRate": 1.3607
    },
    {
      "Cur_ID": 297,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "NOK",
      "Cur_Scale": 10,
      "Cur_Name": "Норвежских крон",
      "Cur_OfficialRate": 2.386
    },
    {
      "Cur_ID": 298,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "RUB",
      "Cur_Scale": 100,
      "Cur_Name": "Российских рублей",
      "Cur_OfficialRate": 3.216
    },
    {
      "Cur_ID": 299,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "XDR",
      "Cur_Scale": 1,
      "Cur_Name": "СДР (Специальные права заимствования)",
      "Cur_OfficialRate": 2.8809
    },
    {
      "Cur_ID": 119,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "SGD",
      "Cur_Scale": 1,
      "Cur_Name": "Сингапурcкий доллар",
      "Cur_OfficialRate": 1.5103
    },
    {
      "Cur_ID": 300,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "KGS",
      "Cur_Scale": 100,
      "Cur_Name": "Сомов",
      "Cur_OfficialRate": 2.9831
    },
    {
      "Cur_ID": 301,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "KZT",
      "Cur_Scale": 1000,
      "Cur_Name": "Тенге",
      "Cur_OfficialRate": 5.4664
    },
    {
      "Cur_ID": 302,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "TRY",
      "Cur_Scale": 10,
      "Cur_Name": "Турецких лир",
      "Cur_OfficialRate": 3.4707
    },
    {
      "Cur_ID": 143,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "GBP",
      "Cur_Scale": 1,
      "Cur_Name": "Фунт стерлингов",
      "Cur_OfficialRate": 2.6396
    },
    {
      "Cur_ID": 305,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "CZK",
      "Cur_Scale": 100,
      "Cur_Name": "Чешских крон",
      "Cur_OfficialRate": 9.0042
    },
    {
      "Cur_ID": 306,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "SEK",
      "Cur_Scale": 10,
      "Cur_Name": "Шведских крон",
      "Cur_OfficialRate": 2.1752
    },
    {
      "Cur_ID": 130,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "CHF",
      "Cur_Scale": 1,
      "Cur_Name": "Швейцарский франк",
      "Cur_OfficialRate": 2.0767
    }
  ];

  let BaseCurrencyYesterday = [
    {
      "Cur_ID": 170,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "AUD",
      "Cur_Scale": 1,
      "Cur_Name": "Австралийский доллар",
      "Cur_OfficialRate": 1.444
    },
    {
      "Cur_ID": 191,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "BGN",
      "Cur_Scale": 1,
      "Cur_Name": "Болгарский лев",
      "Cur_OfficialRate": 1.1909
    },
    {
      "Cur_ID": 290,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "UAH",
      "Cur_Scale": 100,
      "Cur_Name": "Гривен",
      "Cur_OfficialRate": 7.8257
    },
    {
      "Cur_ID": 291,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "DKK",
      "Cur_Scale": 10,
      "Cur_Name": "Датских крон",
      "Cur_OfficialRate": 3.1196
    },
    {
      "Cur_ID": 145,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "USD",
      "Cur_Scale": 1,
      "Cur_Name": "Доллар США",
      "Cur_OfficialRate": 2.0879
    },
    {
      "Cur_ID": 292,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "EUR",
      "Cur_Scale": 1,
      "Cur_Name": "Евро",
      "Cur_OfficialRate": 2.3278
    },
    {
      "Cur_ID": 293,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "PLN",
      "Cur_Scale": 10,
      "Cur_Name": "Злотых",
      "Cur_OfficialRate": 5.4142
    },
    {
      "Cur_ID": 303,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "IRR",
      "Cur_Scale": 100000,
      "Cur_Name": "Иранских риалов",
      "Cur_OfficialRate": 4.9712
    },
    {
      "Cur_ID": 294,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "ISK",
      "Cur_Scale": 100,
      "Cur_Name": "Исландских крон",
      "Cur_OfficialRate": 1.6793
    },
    {
      "Cur_ID": 295,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "JPY",
      "Cur_Scale": 100,
      "Cur_Name": "Йен",
      "Cur_OfficialRate": 1.9105
    },
    {
      "Cur_ID": 23,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "CAD",
      "Cur_Scale": 1,
      "Cur_Name": "Канадский доллар",
      "Cur_OfficialRate": 1.5452
    },
    {
      "Cur_ID": 304,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "CNY",
      "Cur_Scale": 10,
      "Cur_Name": "Китайских юаней",
      "Cur_OfficialRate": 3.022
    },
    {
      "Cur_ID": 72,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "KWD",
      "Cur_Scale": 1,
      "Cur_Name": "Кувейтский динар",
      "Cur_OfficialRate": 6.8601
    },
    {
      "Cur_ID": 296,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "MDL",
      "Cur_Scale": 10,
      "Cur_Name": "Молдавских леев",
      "Cur_OfficialRate": 1.1519
    },
    {
      "Cur_ID": 286,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "NZD",
      "Cur_Scale": 1,
      "Cur_Name": "Новозеландский доллар",
      "Cur_OfficialRate": 1.3607
    },
    {
      "Cur_ID": 297,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "NOK",
      "Cur_Scale": 10,
      "Cur_Name": "Норвежских крон",
      "Cur_OfficialRate": 2.386
    },
    {
      "Cur_ID": 298,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "RUB",
      "Cur_Scale": 100,
      "Cur_Name": "Российских рублей",
      "Cur_OfficialRate": 3.216
    },
    {
      "Cur_ID": 299,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "XDR",
      "Cur_Scale": 1,
      "Cur_Name": "СДР (Специальные права заимствования)",
      "Cur_OfficialRate": 2.8809
    },
    {
      "Cur_ID": 119,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "SGD",
      "Cur_Scale": 1,
      "Cur_Name": "Сингапурcкий доллар",
      "Cur_OfficialRate": 1.5103
    },
    {
      "Cur_ID": 300,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "KGS",
      "Cur_Scale": 100,
      "Cur_Name": "Сомов",
      "Cur_OfficialRate": 2.9831
    },
    {
      "Cur_ID": 301,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "KZT",
      "Cur_Scale": 1000,
      "Cur_Name": "Тенге",
      "Cur_OfficialRate": 5.4664
    },
    {
      "Cur_ID": 302,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "TRY",
      "Cur_Scale": 10,
      "Cur_Name": "Турецких лир",
      "Cur_OfficialRate": 3.4707
    },
    {
      "Cur_ID": 143,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "GBP",
      "Cur_Scale": 1,
      "Cur_Name": "Фунт стерлингов",
      "Cur_OfficialRate": 2.6396
    },
    {
      "Cur_ID": 305,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "CZK",
      "Cur_Scale": 100,
      "Cur_Name": "Чешских крон",
      "Cur_OfficialRate": 9.0042
    },
    {
      "Cur_ID": 306,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "SEK",
      "Cur_Scale": 10,
      "Cur_Name": "Шведских крон",
      "Cur_OfficialRate": 2.1752
    },
    {
      "Cur_ID": 130,
      "Date": "2019-05-30T00:00:00",
      "Cur_Abbreviation": "CHF",
      "Cur_Scale": 1,
      "Cur_Name": "Швейцарский франк",
      "Cur_OfficialRate": 2.0767
    }
  ];

  const BaseCurrencyForList = BaseCurrencyNow.map((Obj, i) => {
    return {
      ID: Obj.Cur_ID,
      Abbr: Obj.Cur_Abbreviation,
      Scale: Obj.Cur_Scale,
      Rate: Obj.Cur_OfficialRate,
      Diff: +(Obj.Cur_OfficialRate - BaseCurrencyYesterday[i].Cur_OfficialRate).toFixed(4),
      SymbolCur: getSumbolCurr(Obj.Cur_Abbreviation),
    }
  })

  return Promise.resolve(BaseCurrencyForList);
}

function getSumbolCurr(Abbr) {
  let ObjSymbolCur = {
    AUD: "$", BGN: "лв", UAH: "₴", DKK: "kr", USD: "$", EUR: "€", PLN: "zł", IRR: "﷼", ISK: "kr",
    JPY: "¥", CAD: "$", CNY: "¥", KWD: "د.ك", MDL: "¤", NZD: "₴", NOK: "kr", RUB: "₽", XDR: "¤",
    SGD: "₴", KGS: "¤", KZT: "₸", TRY: "₺", GBP: "£", CZK: "Kč", SEK: "kr", CHF: "₣",
  }

  return (ObjSymbolCur[Abbr]) ? ObjSymbolCur[Abbr] : "¤";
}