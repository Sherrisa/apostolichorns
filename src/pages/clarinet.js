import "../App.scss";
import { Image, Container, Row, Col, Anchor, } from "react-bootstrap";
import meetingClarinet from "../assets/images/clarinet/meeting_Clarinet.png";
import meetingClarinetPDF from "../assets/images/clarinet/meeting_Clarinet.pdf";
import surelyClarinet from "../assets/images/clarinet/surely_Clarinet.png";
import surelyClarinetPDF from "../assets/images/clarinet/surely_Clarinet.pdf";
import fallingInLoveClarinet from "../assets/images/clarinet/fallingInLove_Clarinet.png";
import fallingInLoveClarinetPDF from "../assets/images/clarinet/fallingInLove_Clarinet.pdf";


function Clarinet() {
  return (
    <div>
      <div className="header">
        <h2 style={{ paddingTop: 80 }}>Clarinet Image Goes Here</h2>
      </div>
      <Container className="sheetMusic" fluid>
        <Row>
          <Col>
            <Anchor href={meetingClarinetPDF}>
              <Image src={meetingClarinet} width="300px" style={{ margin: 20 }} />
            </Anchor>
          </Col>
          <Col>
            <Anchor href={surelyClarinetPDF}>
              <Image src={surelyClarinet} width="300px" style={{ margin: 20 }} />
            </Anchor>
          </Col>
          <Col>
            <Anchor href={fallingInLoveClarinetPDF}>
              <Image src={fallingInLoveClarinet} width="300px" style={{ margin: 20 }} />
            </Anchor>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Clarinet;
