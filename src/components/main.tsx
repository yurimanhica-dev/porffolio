import Lottie from "lottie-react";
import { Github, LinkedinIcon } from "lucide-react";
import animation from "../assets/animation.json";
import { Button } from "./ui/button";
export default function Main() {
  return (
    <section
      id="main"
      className=" flex justify-center h-[100vh] items-center mt-10 xl:mr-28"
    >
      <div
        // style={{ width: "50%" }}
        className="text-primary items-center justify-center md:flex md:flex-row-reverse w-1/2 md:w-[85%] space-y-2 "
      >
        <Lottie animationData={animation} loop={true} className="click" />
        <div className="md:w-1/2 md:px-8 ">
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="text-2xl font-bold flex items-baseline md:text-start ">
              <h1 className="md:text-4xl ">Olá,</h1>
              <img
                src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                alt="Gif de Olá"
                className="m-2 object-contain w-6 md:w-11"
              />
              <h1 className="md:text-4xl text-nowrap">Chamo-me</h1>
            </div>
            <h2 className="text-2xl text-center text-secondary font-bold md:text-5xl text-nowrap">
              Yuri Manhiça!
            </h2>
          </div>
          <h4 className="pt-4 text-center text-md sm:mb-2 lg:px-20">
            Programador, atuando como Engenheiro de Software pela{" "}
            <strong>MALESOFTWARE</strong>.
          </h4>
          <div className="flex items-center flex-col gap-2">
            <Button className="m-2 flex justify-center" asChild>
              <a
                href="https://dbmib2q8rj.ufs.sh/f/Lm6xK3J7O1CLEMlyzsbWBDrHNlkZ671oFJq2IfGUwCjyX83S"
                target="_blank"
                className="click "
              >
                Visualizar Cv
              </a>
            </Button>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/yuri-manhiça/"
                target="_blank"
                className="bg-primary text-zinc-200 p-2 rounded-full click"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.github.com/YuriManhica/"
                target="_blank"
                className="bg-secondary text-zinc-200 p-2 rounded-full click"
              >
                <Github />
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
