import "../App.css";
import { Image } from "react-bootstrap";
import trumpetImg from "../assets/images/trumpet.png";

function Trumpet() {
  return (
    <div>
      <main>
        <div className="header">
          <Image
            fluid
            src={trumpetImg}
            alt="trumpet"
            style={{ marginTop: 35 }}
          />
        </div>

        <div className="body"></div>
      </main>
    </div>
  );
}

export default Trumpet;
