import "../App.scss";
import { Image, Container, Row, Col, Anchor } from "react-bootstrap";
import tromboneImg from "../assets/images/trombone/trombone.png";
import meetingTrombone from "../assets/images/trombone/meeting_Trombone.png";
import meetingTrombonePDF from "../assets/images/trombone/meeting_Trombone.pdf";
import surelyTrombone from "../assets/images/trombone/surely_Trombone.png";
import surelyTrombonePDF from "../assets/images/trombone/surely_Trombone.pdf";
import fallingInLoveTrombone from "../assets/images/trombone/fallingInLove_Trombone.png";
import fallingInLoveTrombonePDF from "../assets/images/trombone/fallingInLove_Trombone.pdf";

function Trombone() {
  return (
    <div>
      <div className="header">
        <Image
          fluid
          src={tromboneImg}
          alt="trombone"
          style={{ marginTop: 50, marginBottom: 50, width: 350 }}
        />
      </div>
      <Container className="sheetMusic" fluid>
        <Row>
          <Col>
            <Anchor href={meetingTrombonePDF}>
              <Image
                src={meetingTrombone}
                width="300px"
                style={{ margin: 20 }}
              />
            </Anchor>
          </Col>
          <Col>
            <Anchor href={surelyTrombonePDF}>
              <Image
                src={surelyTrombone}
                width="300px"
                style={{ margin: 20 }}
              />
            </Anchor>
          </Col>
          <Col>
            <Anchor href={fallingInLoveTrombonePDF}>
              <Image
                src={fallingInLoveTrombone}
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

export default Trombone;
