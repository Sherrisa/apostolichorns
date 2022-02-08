import '../App.css';
import { Image } from "react-bootstrap";
import fluteImg from "../assets/images/flute.svg"

function Flute() {
    return (
      <div>
        <main>
          <Image src={fluteImg} alt="flute"  width="30%" style={{marginTop: 80, marginBottom: 285}}/>
          <div className="body"></div>
        </main>
      </div>
    );
  }
  
  export default Flute;