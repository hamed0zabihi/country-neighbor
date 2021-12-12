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
  //
  const notEmptyNeighbors = commonNeighborsUniqeCountry.filter(
    (el) => el.neighbor !== undefined || el.neighbor.length !== 0
  );

  //

  let mutualCountries = [];
  // notEmptyNeighbors.forEach((para) =>
  //   notEmptyNeighbors.forEach((el) => {
  //     if (el.neighbor.includes(para.name)) {
  //       console.log("includse is ", para.name, el.name);
  //       if (
  //         !mutualCountries.some(
  //           (item) =>
  //             Object.keys(item) == el.name && Object.values(item) == para.name
  //         ) &&
  //         !mutualCountries.some(
  //           (e) => Object.keys(e) == para.name && Object.values(e) == el.name
  //         )
  //       ) {
  //         mutualCountries = [...mutualCountries, { [el.name]: para.name }];
  //       }
  //     }
  //   })
  // );
  notEmptyNeighbors.forEach((para) =>
    notEmptyNeighbors.forEach((el) => {
      if (el.neighbor.includes(para.name)) {
        console.log("includse is ", para.name, el.name);
        if (
          !mutualCountries.some(
            (item) => item.name == el.name && item.neighbor == para.name
          ) &&
          !mutualCountries.some(
            (e) => e.name == para.name && e.neighbor == el.name
          )
        ) {
          mutualCountries = [
            ...mutualCountries,
            { name: el.name, neighbor: para.name },
          ];
        }
      }
    })
  );

  return (
    <Col>
      {!isFetching &&
      !isLoading &&
      countriesNeighbors.length >= uniqCountries.length ? (
        <Row className="d-flex align-item-center">
          {mutualCountries.length ? (
            <Col xs={12} className=" d-flex justify-content-center">
              mutual neighbor
            </Col>
          ) : (
            <Alert color="warning">no matual neighbors</Alert>
          )}
          <Col className=" d-flex justify-content-center py-2">
            {mutualCountries.length ? (
              <>
                <Alert color="info">
                  {mutualCountries.map((item, index) => (
                    <Badge color="success" pill key={index} className="mx-1">
                      {item.name} - {item.neighbor}
                    </Badge>
                  ))}
                </Alert>
              </>
            ) : (
              ""
            )}
          </Col>
        </Row>
      ) : (
        <ReactLoading type="spin" color="red" height={36} width={36} />
      )}
    </Col>
  );
};

export default MutualNieghbors;
