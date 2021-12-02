const isExistKeyArrayObjects = (array, search) => {
  return array.map((el) => Object.keys(el)).some((el) => el == search);
};

export default isExistKeyArrayObjects;
