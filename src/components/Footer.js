import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FooterComp = () => {
  return (
    <>
      <Container className="footer">
        <Row>
          <Col>
            <address className="footerText">
              <a href="mailto:sherrisaclasson@outlook.com">
                sherrisaclasson@outlook.com
              </a>
            </address>
            <a href="tel:2536938272">253.693.8272</a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FooterComp;
