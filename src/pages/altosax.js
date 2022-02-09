import "../App.css";
import { Image } from "react-bootstrap";
import altoSaxImg from "../assets/images/altosax.png";

function AltoSaxophone() {
  return (
    <div>
      <main>
        <div className="header">
          <Image
            fluid
            src={altoSaxImg}
            alt="alto saxophone"
          />
        </div>

        <div className="body"></div>
      </main>
    </div>
  );
}

export default AltoSaxophone;
