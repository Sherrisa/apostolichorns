import "../App.scss";
import { Image, Container, Row, Col, Anchor } from "react-bootstrap";
import fluteImg from "../assets/images/flute/flute.png";
import meetingFlute from "../assets/images/flute/meeting_Flute.png";
import meetingFlutePDF from "../assets/images/flute/meeting_Flute.pdf";
import surelyFlute from "../assets/images/flute/surely_Flute.png";
import surelyFlutePDF from "../assets/images/flute/surely_Flute.pdf";
import fallingInLoveFlute from "../assets/images/flute/fallingInLove_Flute.png";
import fallingInLoveFlutePDF from "../assets/images/flute/fallingInLove_Flute.pdf";


function Flute() {
  return (
    <div>
      <div className="header">
        <Image
          src={fluteImg}
          alt="flute"
          style={{ marginTop: 100, marginBottom: 100, width: 350 }}
        />
      </div>
      <Container className="sheetMusic" fluid>
        <Row>
          <Col>
            <Anchor href={meetingFlutePDF}>
              <Image src={meetingFlute} width="300px" style={{ margin: 20 }} />
            </Anchor>
          </Col>
          <Col>
            <Anchor href={surelyFlutePDF}>
              <Image src={surelyFlute} width="300px" style={{ margin: 20 }} />
            </Anchor>
          </Col>
          <Col>
            <Anchor href={fallingInLoveFlutePDF}>
              <Image src={fallingInLoveFlute} width="300px" style={{ margin: 20 }} />
            </Anchor>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Flute;
