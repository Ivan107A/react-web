const EXCHANGE_RATES = {
    USD: 73.1882,
    EUR: 81.8610,
    RUB: 1,
    BY: 31.3038,
    GBP: 92.2684

};

const exchangeRate = (from, to) => {
    return EXCHANGE_RATES[from] / EXCHANGE_RATES[to];
};

const round = (n) => n.toFixed(2);

export const convert = (amount, from, to) =>
    round(exchangeRate(from, to) * amount);

export const safeConvert = (amount, from, to) =>
    amount === "" ? "" : convert(amount, from, to);

export const parseNum = $ => {
    $ = $.trim().replace(/\.$/, "");
    return $ === "" ? "" : parseFloat($);
};

