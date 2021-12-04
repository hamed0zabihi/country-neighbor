import { Row, Col, Badge, Alert } from "reactstrap";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

const MutualNieghbors = () => {
  const {
    commonNeighborsUniqeCountry,
    countriesNeighbors,
    isFetching,
    isLoading,
    uniqCountries,
  } = useSelector((state) => state.country);
  const notEmptyNeighbors = commonNeighborsUniqeCountry.filter(
    (el) => el.neighbor != ""
  );

  //   function generate seprate neighbors :
  //   { name: "iran", neighbor: ["turkey","iraq"] }  to :
  //   { name: "iran", neighbor: "turkey" },{ name: "iran", neighbor: "iraq" }

  const pairNeghbors = notEmptyNeighbors
    .map((el) =>
      el.neighbor
        ?.map((item) => {
          return { name: el.name, neighbor: item };
        })
        .flat()
    )
    .flat();

  // We want to show the mutual neighbors once
  // one of
  // { name: "iran", neighbor: "turkey" }   or   { name: "turkey", neighbor: "iran" }
  // select one of mutual neighbors with index
  // function return on of two mutual index

  const indexOfMutual = (obj, arr, index) => {
    let indexis = arr.findIndex(
      (el) => el.name === obj.neighbor && el.neighbor === obj.name
    );
    if (indexis !== -1 && indexis > index) return indexis;
  };

  const allIndexMutual = pairNeghbors
    .map((el, index) => indexOfMutual(el, pairNeghbors, index))
    .filter((item) => item);

  const mutual = pairNeghbors.filter((el, index) =>
    allIndexMutual.every((els) => els !== index)
  );

  return (
    <Col>
      {!isFetching &&
      !isLoading &&
      countriesNeighbors.length >= uniqCountries.length ? (
        <Row className="d-flex align-item-center">
          {mutual.length ? (
            <Col xs={12} className=" d-flex justify-content-center">
              mutual neighbor
            </Col>
          ) : (
            <Alert color="warning">no matual neighbors</Alert>
          )}
          <Col className=" d-flex justify-content-center py-2">
            <Alert color="info">
              {mutual.map((el, index) => (
                <Badge color="success" pill key={index} className="mx-1">
                  {el.name} - {el.neighbor}
                </Badge>
              ))}
            </Alert>
          </Col>
        </Row>
      ) : (
        <ReactLoading type="spin" color="red" height={36} width={36} />
      )}
    </Col>
  );
};

export default MutualNieghbors;
