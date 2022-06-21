import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import MajorChords from "../components/MajorChords";


const Piano = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
        <Col lg={6}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Major Chords</Accordion.Header>
                <Accordion.Body>
                  <MajorChords />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Piano;
