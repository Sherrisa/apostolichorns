import "../App.css";
import { Image, Container, Row, Col, Anchor, } from "react-bootstrap";
import tenorSaxImg from "../assets/images/tenorsax/tenorsax.png";
import meetingTenor from "../assets/images/tenorsax/meeting_TenorSaxophone.png";
import meetingTenorPDF from "../assets/images/tenorsax/meeting_TenorSaxophone.pdf";

function TenorSaxophone() {
  return (
    <div>
      <div className="header">
        <Image fluid src={tenorSaxImg} alt="tenor saxophone" />
      </div>
      <Container className="body" fluid>
        <Row>
          <Col>
            <Anchor href={meetingTenorPDF}>
              <Image src={meetingTenor} width="300px" style={{ margin: 20 }} />
            </Anchor>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TenorSaxophone;
