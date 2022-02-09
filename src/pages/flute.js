import "../App.css";
import { Image } from "react-bootstrap";
import fluteImg from "../assets/images/flute.svg";

function Flute() {
  return (
    <div>
      <main>
        <div className="header">
        <Image
          src={fluteImg}
          alt="flute"
          width="500px"
          style={{ marginTop: 80 }}
        />
        </div>
        
        <div className="body"></div>
      </main>
    </div>
  );
}

export default Flute;
