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
          Welcome to my portfolio. Passionate about web development, I create
          modern, interactive websites tailored to your needs. My goal is to
          transform your ideas into unique user experiences. Explore my projects
          and achievements below!
        </p>
      </div>
      <Image className="profilImage" src={me} alt="William Mauroux" />
    </div>
  );
}
