"use client";

import Image, { StaticImageData } from "next/image";
import "./style.scss";
import file from "../../../public/file.svg";
import mac2 from "../../../public/mac2.png";
import { useState } from "react";
import { projects } from "../../data/projects/projects.js";

type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  techno: StaticImageData[];
  gitHub: string;
  source?: string;
};

export default function Card() {
  const folders = ["booki", "oh-my-food", "sophie-bluel"];
  const [selectedFolder, setSelectedFolder] = useState<number | null>(null);
  const [selectProject, setSelectProject] = useState<Project | null>(null);

  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (
      target.className !== "selectedFolder" &&
      target.className !== "folder"
    ) {
      setSelectedFolder(null);
    }
  });

  const handleclick = (index: number) => {
    setSelectedFolder(index);
  };
  const handledoubleclick = (index: number) => {
    if (index === 0) {
      setSelectProject(projects[0]);
    } else if (index === 1) {
      setSelectProject(projects[1]);
    } else if (index === 2) {
      setSelectProject(projects[2]);
    }
  };

  return (
    <div className="card">
      {selectProject ? (
        <>
          <div className="projectBar">
            <div onClick={() => setSelectProject(null)} className="closeButton">
              <span>X</span>
            </div>
            <div className="descriptionContainer">
              <h3 className="projectTitle">{selectProject.title}</h3>
              <p className="description">{selectProject.description}</p>
              <p className="source">
                This is a preview of the site, which is non-functional.
                {selectProject.source ? (
                  <>
                    <br />
                    To view the fully functional site :{" "}
                    <a href={selectProject.source}>Click here</a>
                  </>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div className="technoContainer">
              {selectProject.techno.map((tech, index) => (
                <Image key={index} src={tech} alt="tech" />
              ))}
            </div>
          </div>
          <Image
            className="projectImage"
            src={selectProject.image}
            alt="project"
          />
        </>
      ) : (
        <>
          <Image className="macImage" src={mac2} alt="mac" priority />
          <div className="folderContainer">
            {folders.map((title, index) => (
              <div
                onClick={() => handleclick(index)}
                onDoubleClick={() => handledoubleclick(index)}
                className="folders"
                key={title}
              >
                <Image className="folder" src={file} alt="booki" />
                <span
                  className={selectedFolder === index ? "selectedFolder" : " "}
                >
                  {title}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}