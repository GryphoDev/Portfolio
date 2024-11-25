"use client";

import "./style.scss";
import githubIcon from "../../../public/github.svg";
import linkedinIcon from "../../../public/linkedin.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navBarLinks = [
    { title: "Projects", href: "#projects" },
    { title: "Tools", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];
  const socialLinks = [
    { icon: githubIcon, href: "" },
    { icon: linkedinIcon, href: "" },
  ];

  return (
    <header>
      <h1 className="logo">WM</h1>
      <nav>
        <ul className="navbar">
          {navBarLinks.map((link, index) => (
            <li className="navbar__links" key={index}>
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </ul>
      </nav>
      <div className="socialLinks">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href}>
            <Image className="socialLinks__icons" src={link.icon} alt="icon" />
          </a>
        ))}
      </div>
    </header>
  );
}
