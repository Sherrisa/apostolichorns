import "../App.css";
import { Image } from "react-bootstrap";
import tromboneImg from "../assets/images/trombone.png";

function Trombone() {
  return (
    <div>
      <main>
        <div className="header">
          <Image
            fluid
            src={tromboneImg}
            alt="trombone"
            style={{ marginTop: 100 }}
          />
        </div>

        <div className="body"></div>
      </main>
    </div>
  );
}

export default Trombone;
