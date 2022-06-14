import "../App.scss";
import { Image, Container, Row, Col, Anchor } from "react-bootstrap";
import tromboneImg from "../assets/images/trombone/trombone.png";
import meetingTrombone from "../assets/images/trombone/meeting_Trombone.png";
import meetingTrombonePDF from "../assets/images/trombone/meeting_Trombone.pdf";

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
        </Row>
      </Container>
    </div>
  );
}

export default Trombone;
