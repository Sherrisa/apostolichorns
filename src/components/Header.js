import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import stickMusicians from "../assets/images/stickMusicians.svg";

const HeaderComp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 2 }}>
            <Image fluid src={stickMusicians}></Image>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeaderComp;
