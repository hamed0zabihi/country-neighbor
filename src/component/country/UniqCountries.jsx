import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import Neighbors from "./Neighbors";

const UniqCountries = () => {
  const uniqueCountries = useSelector((state) => state.country.uniqCountries);
  const countriesNeighbors = useSelector(
    (state) => state.country.countriesNeighbors
  );
  return (
    <>
      <ListGroup>
        {uniqueCountries.map((name) => (
          <ListGroupItem key={name}>
            {name}
            {countriesNeighbors.length >= uniqueCountries.length ? (
              <Neighbors name={name} />
            ) : (
              ""
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};

export default UniqCountries;
