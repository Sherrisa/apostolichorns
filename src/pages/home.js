import "../App.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import MajorScales from "../components/MajorScales";
import MinorScales from "../components/MinorScales";

function Home() {
  return (
    <>
      <Header />
      <Container className="home">
        <Row>
          <Col>
            <a href="https://calendly.com/sherrisaclasson/private-lesson">
              <Button  variant={"dark"} style={{ marginBottom: 30 }}>Schedule a Lesson</Button>
              
            </a>
          </Col>
        </Row>
        <Row>
          <Col lg={6} style={{ marginBottom: 30 }}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Major Scales</Accordion.Header>
                <Accordion.Body>
                  <MajorScales />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg={6}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Natural Minor Scales</Accordion.Header>
                <Accordion.Body>
                  <MinorScales />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
