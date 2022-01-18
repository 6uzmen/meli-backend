export const parseIfIntPositive = (str: string): number | false => {
  if (typeof str !== 'string') return false;
  const num = Number(str);
  return Number.isInteger(num) && num > 0 ? num : false;
};

export const forrmatItemPrice = (price: number | string): string[] => {
  const formattedPrice = `${price}`.split('.');
  const priceInt = formattedPrice[0];
  let decimals = '00';

  if (formattedPrice.length === 2) {
    decimals = formattedPrice[1].toString().length === 1 ? formattedPrice[1] + '0' : formattedPrice[1];
  }

  return [priceInt, decimals];
};
