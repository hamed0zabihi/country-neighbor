const ShuffleCountries = (arr, count) => {
  let array = [...arr];
  return [...Array(count)].map(
    () => array.splice(Math.floor(Math.random() * array.length), 1)[0]
  );
};

export default ShuffleCountries;
