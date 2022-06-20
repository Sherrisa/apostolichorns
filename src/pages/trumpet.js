import "../App.scss";
import { Image, Container, Row, Col, Anchor } from "react-bootstrap";
import trumpetImg from "../assets/images/trumpet/trumpet.png";
import meetingTrumpet from "../assets/images/trumpet/meeting_Trumpet.png";
import meetingTrumpetPDF from "../assets/images/trumpet/meeting_Trumpet.pdf";
import surelyTrumpet from "../assets/images/trumpet/surely_Trumpet.png";
import surelyTrumpetPDF from "../assets/images/trumpet/surely_Trumpet.pdf";
import fallingInLoveTrumpet from "../assets/images/trumpet/fallingInLove_Trumpet.png";
import fallingInLoveTrumpetPDF from "../assets/images/trumpet/fallingInLove_Trumpet.pdf";

function Trumpet() {
  return (
    <div>
      <div className="header">
        <Image
          src={trumpetImg}
          alt="flute"
          style={{ marginTop: 50, marginBottom: 50, width: 350 }}
        />
      </div>
      <Container className="sheetMusic" fluid>
        <Row>
          <Col >
            <Anchor href={meetingTrumpetPDF}>
              <Image
                src={meetingTrumpet}
                width="300px"
                style={{ margin: 20 }}
              />
            </Anchor>
          </Col>
          <Col>
            <Anchor href={surelyTrumpetPDF}>
              <Image
                src={surelyTrumpet}
                width="300px"
                style={{ margin: 20 }}
              />
            </Anchor>
          </Col>
          <Col>
            <Anchor href={fallingInLoveTrumpetPDF}>
              <Image
                src={fallingInLoveTrumpet}
                width="300px"
                style={{ margin: 20 }}
              />
            </Anchor>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Trumpet;
