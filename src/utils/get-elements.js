export const getElements = (arr, current, quantity) => {
  const length = arr.length;
  const result = [];

  for (let i = 0; i < quantity; i++) {
    const index = (current + i) % length;
    result.push(arr[index]);
  }

  return result;
};
