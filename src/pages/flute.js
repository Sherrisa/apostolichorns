import "../App.css";
import { Image, Container, Row, Col, Anchor } from "react-bootstrap";
import fluteImg from "../assets/images/flute/flute.svg";
import meetingFlute from "../assets/images/flute/meeting_Flute.png";
import meetingFlutePDF from "../assets/images/flute/meeting_Flute.pdf";

function Flute() {
  return (
    <div>
      <div className="header">
        <Image src={fluteImg} alt="flute" />
      </div>
      <Container className="body" fluid>
        <Row>
          <Col>
            <Anchor href={meetingFlutePDF}>
              <Image src={meetingFlute} width="300px" style={{ margin: 20 }} />
            </Anchor>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Flute;
