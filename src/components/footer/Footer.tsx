import Image from "next/image";
import githubIcon from "../../../public/github.svg";
import linkedinIcon from "../../../public/linkedin.svg";
import "./style.scss";

export function Footer() {
  const socialLinks = [
    { icon: githubIcon, href: "" },
    { icon: linkedinIcon, href: "" },
  ];

  return (
    <footer>
      <h1 className="logo">WM</h1>

      <p>&copy; 2024 William Mauroux. All rights reserved.</p>
      <div className="socialLinks">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href}>
            <Image className="socialLinks__icons" src={link.icon} alt="icon" />
          </a>
        ))}
      </div>
    </footer>
  );
}
