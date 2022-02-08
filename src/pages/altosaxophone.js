import '../App.css';
import { Image } from "react-bootstrap";
import altoSaxImg from "../assets/images/altosaxophone.png"

function AltoSaxophone() {
    return (
      <div>
        <main>
          <Image  fluid src={altoSaxImg} alt="alto saxophone" style={{marginBottom: 20}} />
          <div className="body"></div>
        </main>
      </div>
    );
  }
  
  export default AltoSaxophone;