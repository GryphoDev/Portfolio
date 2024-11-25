import me from "../../../public/me2.png";
import Image from "next/image";
import "./style.scss";

export default function Introdution() {
  return (
    <div id="home" className="homeContent">
      <div className="titleDescription">
        <h2 className="title">WILLIAM MAUROUX</h2>
        <h3 className="job">
          Front-End <span>Developer</span>
        </h3>
        <p className="description">
          Hello, my name is William Mauroux, nice to meet you I would like to
          welcome you with my personal portfolio. Hello, my name is William
          Mauroux, nice to meet you I would like to welcome you with my personal
          portfolio.
        </p>
      </div>
      <Image className="profilImage" src={me} alt="William Mauroux" />
    </div>
  );
}
