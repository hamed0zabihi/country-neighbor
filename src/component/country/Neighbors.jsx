import { useSelector } from "react-redux";
import { Badge } from "reactstrap";
import findNeigbors from "../utils/country/findNeighbors";

const Neighbors = ({ name }) => {
  const countriesNeighbors = useSelector(
    (state) => state.country.countriesNeighbors
  );

  const neighborsCountry = findNeigbors(name, countriesNeighbors);

  console.log(
    "isExist",
    name,
    countriesNeighbors.flat().some((el) => Object.keys(el) == name)
  );

  const countryWithNeighbors = countriesNeighbors
    .filter((els) => {
      if (Object.keys(els) == name) {
        return els;
      }
    })
    .flat();

  const c = countryWithNeighbors[0];
  const countryNeighbors = Object.values(c).flat();

  return (
    <div>
      {countryNeighbors.map((el) => (
        <Badge pill key={el}>
          {el}
        </Badge>
      ))}
      {neighborsCountry.map((el) => (
        <div
          key={el}
          className=" d-inline-flex justify-content-center align-items-center"
        >
          <span> is common on this list: </span>
          <Badge pill color="success">
            {el}
          </Badge>
        </div>
      ))}
    </div>
  );
};

export default Neighbors;
