import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import ButtonIncDec from "../../component/styles/ButtonIncDec/ButtonIncDec";
import { separateCountries } from "../../redux/actions/Country";
import UniqCountries from "../../component/country/UniqCountries";

const Home = () => {
  const dispatch = useDispatch();
  const allCountriesInWorld = useSelector(
    (state) => state.country.allcountriesinworld
  );

  const [countryNumber, setCountryNumber] = useState(10);

  useEffect(() => {
    if (allCountriesInWorld.length) {
      dispatch(separateCountries(parseInt(countryNumber)));
    }
  }, [countryNumber]);
  // useEffect(() => {
  //   if (nextStep) {
  //     dispatch(fetchCountriesNeighbors());
  //   }
  // }, [nextStep]);

  const handleClick = (e) => {
    setCountryNumber(e.target.value);
  };
  console.log(countryNumber);
  return (
    <>
      <div>hello ReactJs</div>
      <Row>
        <Col className="bg-light border" xs="2">
          <ButtonIncDec handleClick={handleClick} defaultData={countryNumber} />
        </Col>
      </Row>
      <UniqCountries />
    </>
  );
};

export default Home;
