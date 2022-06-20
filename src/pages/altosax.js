import "../App.scss";
import { Image, Container, Row, Col, Anchor } from "react-bootstrap";
import altoSaxImg from "../assets/images/altosax/altosax.png";
import meetingAlto from "../assets/images/altosax/meeting_AltoSaxophone.png";
import meetingAltoPDF from "../assets/images/altosax/meeting_AltoSaxophone.pdf";
import surelyAlto from "../assets/images/altosax/surely_AltoSaxophone.png";
import surelyAltoPDF from "../assets/images/altosax/surely_AltoSaxophone.pdf";
import fallingInLoveAlto from "../assets/images/altosax/fallingInLove_AltoSaxophone.png";
import fallingInLoveAltoPDF from "../assets/images/altosax/fallingInLove_AltoSaxophone.pdf";

function AltoSaxophone() {
  return (
    <div>
      <div className="header">
        <Image fluid src={altoSaxImg} alt="alto saxophone" />
      </div>
      <Container className="sheetMusic" fluid>
        <Row>
          <Col>
            <Anchor href={meetingAltoPDF}>
              <Image src={meetingAlto} width="300px" style={{ margin: 20 }}/>
            </Anchor>
          </Col>
          <Col>
            <Anchor href={surelyAltoPDF}>
              <Image src={surelyAlto} width="300px" style={{ margin: 20 }}/>
            </Anchor>
          </Col>
          <Col>
            <Anchor href={fallingInLoveAltoPDF}>
              <Image src={fallingInLoveAlto} width="300px" style={{ margin: 20 }}/>
            </Anchor>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AltoSaxophone;
