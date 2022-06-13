import "../App.css";
import { Image, Container, Row, Col, Anchor, } from "react-bootstrap";
import meetingClarinet from "../assets/images/clarinet/meeting_Clarinet.png";
import meetingClarinetPDF from "../assets/images/clarinet/meeting_Clarinet.pdf";

function Clarinet() {
  return (
    <div>
      <div className="header">
        <h2 style={{ paddingTop: 80 }}>Clarinet Image Goes Here</h2>
      </div>
      <Container className="body" fluid>
        <Row>
          <Col>
            <Anchor href={meetingClarinetPDF}>
              <Image src={meetingClarinet} width="300px" style={{ margin: 20 }} />
            </Anchor>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Clarinet;
