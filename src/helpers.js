
const currencyOptions = {
  USD: {
    decimalCount: 2,
    decimalSeparator: '.',
    thousandsSeparator: ',',
    currencySign: '$',
  },
  COP: {
    decimalCount: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    currencySign: '$',
  },
};

function formatMoney(amount, currency, customCurrencyOpts = {}) {
  const allOpts = Object.assign({ ...currencyOptions }, customCurrencyOpts);
  const options = allOpts[currency];

  if (!options) throw new Error('Currency not supported!');
  // eslint-disable-next-line object-curly-newline
  const { decimalCount, decimalSeparator, thousandsSeparator, currencySign } = options;

  const negativeSign = amount < 0 ? '- ' : '';
  const truncatedAmount = Math.abs(amount).toFixed(decimalCount);
  const wholeAmount = parseInt(truncatedAmount, 10).toString();
  const thousandPos = wholeAmount.length > 3 ? wholeAmount.length % 3 : 0;
  const wholePart = (thousandPos ? wholeAmount.substr(0, thousandPos) + thousandsSeparator : '')
    + wholeAmount.substr(thousandPos).replace(/(\d{3})(?=\d)/g, `$1${thousandsSeparator}`);
  const decimalPart = decimalCount
    ? decimalSeparator + Math.abs(truncatedAmount - wholeAmount).toFixed(decimalCount).slice(2)
    : '';

  return `${negativeSign}${currencySign}${wholePart}${decimalPart}`;
}

export { formatMoney, currencyOptions };
