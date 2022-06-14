import "../App.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Header from "../components/Header";
import MajorScales from "../components/MajorScales";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
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
            <Card>
              <Card.Header>Major Scales</Card.Header>
              <Card.Body>
                <MajorScales />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
