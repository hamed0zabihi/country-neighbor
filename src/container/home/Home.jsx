import { useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import ButtonIncDec from "../../component/styles/ButtonIncDec/ButtonIncDec";
import { separateCountries } from "../../redux/actions/Country";
import UniqCountries from "../../component/country/UniqCountries";

const Home = () => {
  const dispatch = useDispatch();
  const countryNumber = 10;
  const handleClick = (e) => {
    dispatch(separateCountries(parseInt(e.target.value)));
  };

  return (
    <Container>
      <Row>
        <Col xs={3} md={2} className="mx-auto my-2">
          <ButtonIncDec handleClick={handleClick} defaultData={countryNumber} />
        </Col>
      </Row>
      <UniqCountries />
    </Container>
  );
};

export default Home;
