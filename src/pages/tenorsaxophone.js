import '../App.css';
import { Image } from "react-bootstrap";
import tenorSaxImg from "../assets/images/tenorsaxophone.png"

function TenorSaxophone() {
    return (
      <div>
        <main>
          <Image  fluid src={tenorSaxImg} alt="tenor saxophone" />
          <div className="body"></div>
        </main>
      </div>
    );
  }
  
  export default TenorSaxophone;