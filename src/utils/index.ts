export const parseIfIntPositive = (str: string): number | false => {
  if (typeof str !== 'string') return false;
  const num = Number(str);
  return Number.isInteger(num) && num > 0 ? num : false;
};
