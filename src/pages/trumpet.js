import '../App.css';
import { Image } from "react-bootstrap";
import trumpetImg from "../assets/images/trumpet.png"

function Trumpet() {
    return (
      <div>
        <main>
          <Image  fluid src={trumpetImg} alt="trumpet" style={{marginTop: 55, marginBottom: 200}}/>
          <div className="body"></div>
        </main>
      </div>
    );
  }
  
  export default Trumpet;