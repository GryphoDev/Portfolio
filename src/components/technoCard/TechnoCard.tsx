import Image from "next/image";
import react from "../../../public/react.svg";
import tailwind from "../../../public/tailwindcss.svg";
import sass from "../../../public/sass.svg";
import typescript from "../../../public/typescript.svg";

import "./style.scss";

const techno = [
  {
    name: "React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vitae architecto quo officia magnam. Cupiditate, harum. Culpa nihil deserunt facilis, corrupti cumque eligendi beatae!",
    image: react,
  },
  {
    name: "Tailwind",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vitae architecto quo officia magnam. Cupiditate, harum. Culpa nihil deserunt facilis, corrupti cumque eligendi beatae!",
    image: tailwind,
  },
  {
    name: "Sass",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vitae architecto quo officia magnam. Cupiditate, harum. Culpa nihil deserunt facilis, corrupti cumque eligendi beatae!",
    image: sass,
  },
  {
    name: "Typescript",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vitae architecto quo officia magnam. Cupiditate, harum. Culpa nihil deserunt facilis, corrupti cumque eligendi beatae!",
    image: typescript,
  },
];

export default function TechnoCard() {
  return (
    <div className="technoCard">
      {techno.map((item, index) => (
        <div key={index} className="card">
          <div className="imageContainer">
            <div className="image">
              <Image src={item.image} alt={item.name} />
            </div>
          </div>
          <div className="text">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
