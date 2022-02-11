import "../App.css";
import { Image, Container, Row, Col, Anchor } from "react-bootstrap";
// Do I actually have to do it this way?
import fluteImg from "../assets/images/flute.svg";
import anointingFlutePDF from "../assets/images/flute/anointing_Flute.pdf"
import anointingFlute from "../assets/images/flute/anointing_Flute255.jpg"

function Flute() {
  return (
    <div>
        <div className="header">
        <Image
          src={fluteImg}
          alt="flute"
          width="500px"
          style={{ marginTop: 20 }}
        />
        </div>
        <Container className="body" fluid>
          <Row>
            <Col>
              <Anchor href={anointingFlutePDF} >
                {/* Looks like you can't use a pdf as an image */}
                <Image src={anointingFlute} style={{ margin: 50 }} />
              </Anchor>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Flute;
