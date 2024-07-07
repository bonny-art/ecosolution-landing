export const formatNumber = num => {
  return new Intl.NumberFormat('de-DE').format(num);
};
