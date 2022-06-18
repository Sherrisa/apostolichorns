import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fallingInLove from "../assets/audio/fallingInLove_Trumpet.mp3";
import meeting from "../assets/audio/meeting_Flute.mp3";
import surely from "../assets/audio/surely_Clarinet.mp3";

const PlayAlongs = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col lg={4}>
            <p>Falling in Love with Jesus</p>
            <audio controls>
              <source src={fallingInLove} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </Col>
          <Col lg={4}>
            <p>Meeting in the Air</p>
            <audio controls>
              <source src={meeting} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </Col>
          <Col lg={4}>
            <p>Surely the Presence of the Lord</p>
            <audio controls>
              <source src={surely} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default PlayAlongs;
