export const formatPhoneNumber = phoneNumber => {
  const cleaned = phoneNumber.replace(/\D/g, '');

  const country = cleaned.substring(0, 2); // '38'
  const operator = cleaned.substring(2, 5); // '093'
  const firstPart = cleaned.substring(5, 7); // '12'
  const secondPart = cleaned.substring(7, 9); // '34'
  const lastPart = cleaned.substring(9); // '567'

  return `${country} (${operator}) ${firstPart} ${secondPart} ${lastPart}`;
};
