import "../App.scss";
import { Image, Container, Row, Col, Anchor, } from "react-bootstrap";
import tenorSaxImg from "../assets/images/tenorsax/tenorsax.png";
import meetingTenor from "../assets/images/tenorsax/meeting_TenorSaxophone.png";
import meetingTenorPDF from "../assets/images/tenorsax/meeting_TenorSaxophone.pdf";
import surelyTenor from "../assets/images/tenorsax/surely_TenorSaxophone.png";
import surelyTenorPDF from "../assets/images/tenorsax/surely_TenorSaxophone.pdf";
import fallingInLoveTenor from "../assets/images/tenorsax/fallingInLove_TenorSaxophone.png";
import fallingInLoveTenorPDF from "../assets/images/tenorsax/fallingInLove_TenorSaxophone.pdf";


function TenorSaxophone() {
  return (
    <div>
      <div className="header">
        <Image fluid src={tenorSaxImg} alt="tenor saxophone" />
      </div>
      <Container className="sheetMusic" fluid>
        <Row>
          <Col>
            <Anchor href={meetingTenorPDF}>
              <Image src={meetingTenor} width="300px" style={{ margin: 20 }} />
            </Anchor>
          </Col>
          <Col>
            <Anchor href={surelyTenorPDF}>
              <Image src={surelyTenor} width="300px" style={{ margin: 20 }} />
            </Anchor>
          </Col>
          <Col>
            <Anchor href={fallingInLoveTenorPDF}>
              <Image src={fallingInLoveTenor} width="300px" style={{ margin: 20 }} />
            </Anchor>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TenorSaxophone;
