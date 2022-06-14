import Image from 'react-bootstrap/Image';
import stickMusicians from "../assets/images/stickMusicians.svg";

const HeaderComp = () => {
    return (
        <Image fluid src={stickMusicians} style={{ height: 500 }} ></Image>
    )
}

export default HeaderComp;