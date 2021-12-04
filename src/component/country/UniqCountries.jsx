import { useSelector } from "react-redux";
import { Row, Col, ListGroup, ListGroupItem, Badge } from "reactstrap";
import ReactLoading from "react-loading";
import isExistKeyArrayObjects from "../utils/country/isExistKeyArrayObjects";
import Neighbors from "./Neighbors";
import MutualNieghbors from "./MutualNeighbors";

const UniqCountries = () => {
  const { uniqCountries, countriesNeighbors, isLoading, isFetching } =
    useSelector((state) => state.country);

  return (
    <Row>
      {!isFetching ? (
        <>
          <Row>
            <Col>
              {uniqCountries.map((name, index) => (
                <ListGroup key={name}>
                  <ListGroupItem>
                    <Badge color="info" pill>
                      {index + 1}
                    </Badge>
                    {name}
                    {!isLoading &&
                    countriesNeighbors.length >= uniqCountries.length &&
                    isExistKeyArrayObjects(countriesNeighbors, name) ? (
                      <Neighbors name={name} />
                    ) : (
                      <ReactLoading
                        type="spin"
                        color="red"
                        height={36}
                        width={36}
                      />
                    )}
                  </ListGroupItem>
                </ListGroup>
              ))}
            </Col>
          </Row>
          <Row className="py-5">
            <MutualNieghbors />
          </Row>
        </>
      ) : (
        <ReactLoading type="spin" color="#2080f3" height={36} width={36} />
      )}
    </Row>
  );
};

export default UniqCountries;
