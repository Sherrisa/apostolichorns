import "../App.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Header from "../components/Header";
import MajorScales from "../components/MajorScales";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col md={6}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Schedule a Lesson</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Lessons are available at my home or by phone. To schedule,
                    click on the link below.
                  </p>
                  <p className="calendly">
                    <a href="https://calendly.com/sherrisaclasson/private-lesson">
                      calend.ly scheduler
                    </a>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Major Scales</Accordion.Header>
                <Accordion.Body>
                  <MajorScales />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
