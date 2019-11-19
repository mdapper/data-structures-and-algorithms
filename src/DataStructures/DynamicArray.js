export const set = ({ array, index, value }) => {
  let newArray = [...array];
  newArray[index] = value;

  return newArray;
};

export const get = ({ array, index }) => {
  return array[index];
};
