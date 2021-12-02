const findNeigbors = (name, array) => {
  return array
    .map((el) =>
      Object.entries(el)
        .map(([key, value]) =>
          value.map((elss) => {
            if (elss == name) return key;
          })
        )
        .flat()
    )
    .flat()
    .filter((item) => item);
};

export default findNeigbors;
