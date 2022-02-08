import '../App.css';
import { Image } from "react-bootstrap";
import tromboneImg from "../assets/images/trombone.png"

function Trombone() {
    return (
      <div>
        <main>
          <Image  fluid src={tromboneImg} alt="trombone" width="30%" style={{marginTop: 55, marginBottom: 185}}/>
          <div className="body"></div>
        </main>
      </div>
    );
  }
  
  export default Trombone;