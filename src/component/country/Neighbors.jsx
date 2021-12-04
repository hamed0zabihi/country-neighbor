import { useSelector } from "react-redux";
import { Col, Badge } from "reactstrap";
import findNeigbors from "../utils/country/findNeighbors";

const Neighbors = ({ name }) => {
  const { countriesNeighbors, uniqCountries } = useSelector(
    (state) => state.country
  );

  // select unique contries with neighbors
  const uniqCountriesWithNeighbors = uniqCountries
    .map((el) =>
      countriesNeighbors.filter((els) => {
        if (Object.keys(els) == el) {
          return els;
        }
      })
    )
    .flat();
  // This country is a neighbor of another country on this list
  // countries have this country in neighbors
  const neighborsCountry = findNeigbors(name, uniqCountriesWithNeighbors);
  // filter neighbors
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
    <Col>
      <Col>
        <Col>
          {countryNeighbors.map((el) => (
            <Badge color="secondary" pill key={el}>
              {el}
            </Badge>
          ))}
        </Col>
        <Col>
          {neighborsCountry.length ? (
            <Col>
              <span> {name} is one of </span>
              {neighborsCountry.map((el) => (
                <div
                  key={el}
                  className=" d-inline-flex justify-content-center align-items-center"
                >
                  <Badge pill color="success">
                    {el}
                  </Badge>
                </div>
              ))}
              <span> neighbors on this list</span>
            </Col>
          ) : (
            ""
          )}
        </Col>
      </Col>
    </Col>
  );
};

export default Neighbors;
