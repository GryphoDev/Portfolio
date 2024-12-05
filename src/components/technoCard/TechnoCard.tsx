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
      "I use React because it offers great flexibility and makes it easy to build interactive and responsive applications. Its component-based architecture allows me to create modular and scalable interfaces, while its powerful state management system boosts productivity. I particularly appreciate the large React community, which provides access to a wealth of tools and resources.",
    image: react,
  },
  {
    name: "Tailwind",
    description:
      "Tailwind CSS has become one of my favorite tools because it allows me to quickly design sleek, responsive interfaces without having to write complex CSS. With its utility-first approach, I can customize every aspect of the design directly in the HTML, making development faster and more efficient. Its simplicity and flexibility make it an excellent choice for projects where speed and quality are key.",
    image: tailwind,
  },
  {
    name: "Sass",
    description:
      "I use Sass because it makes CSS much more powerful and maintainable. Features like variables, mixins, and loops allow me to write cleaner, reusable, and modular code. This makes managing styles in larger projects smoother. Sass also saves me time on large-scale projects while keeping the code well-organized.",
    image: sass,
  },
  {
    name: "Typescript",
    description:
      "TypeScript is one of my favorite tools because it helps me write more robust and reliable code. By adding static types to JavaScript, TypeScript enables me to catch errors early in the development phase, reducing bugs in production. I value the improved readability and maintainability, especially for larger projects where type management becomes essential. TypeScript also enhances team collaboration by providing implicit documentation through types.",
    image: typescript,
  },
];

export default function TechnoCard() {
  return (
    <div className="technoCard">
      {techno.map((item, index) => (
        <div key={index} className="cardTechno">
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
