import "../App.css";
import { Image } from "react-bootstrap";
import tenorSaxImg from "../assets/images/tenorsax.png";

function TenorSaxophone() {
  return (
    <div>
      <main>
        <div className="header">
          <Image fluid src={tenorSaxImg} alt="tenor saxophone" />
        </div>

        <div className="body"></div>
      </main>
    </div>
  );
}

export default TenorSaxophone;
