import "../App.css";
import { Image, Container, Row, Col, Anchor } from "react-bootstrap";
import altoSaxImg from "../assets/images/altosax/altosax.png";
import meetingAlto from "../assets/images/altosax/meeting_AltoSaxophone.png";
import meetingAltoPDF from "../assets/images/altosax/meeting_AltoSaxophone.pdf";

function AltoSaxophone() {
  return (
    <div>
      <div className="header">
        <Image fluid src={altoSaxImg} alt="alto saxophone" />
      </div>
      <Container className="body" fluid>
        <Row>
          <Col>
            <Anchor href={meetingAltoPDF}>
              <Image src={meetingAlto} width="300px" style={{ margin: 20 }}/>
            </Anchor>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AltoSaxophone;
