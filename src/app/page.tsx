import About from "@/components/about/About";
import { Contact } from "@/components/contact/contact";
import Introdution from "@/components/introduction/Introdution";
import MyProjects from "@/components/myProjects/MyProjects";

export default function Home() {
  return (
    <>
      <Introdution />
      <MyProjects />
      <About />
      <Contact />
    </>
  );
}
