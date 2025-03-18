import Lottie from "lottie-react";
import { Github, LinkedinIcon } from "lucide-react";
import animation from "../assets/animation.json";
import { Button } from "./ui/button";
export default function Main() {
  return (
    <main className=" flex justify-center h-[100vh] items-center">
      <div style={{ width: "50%" }} className="text-primary">
        <Lottie animationData={animation} loop={true} className="click" />
        <div className="flex flex-col gap-1 items-center ">
          <div className="text-2xl font-bold flex items-baseline ">
            <h1>Olá,</h1>
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              alt="Gif de Olá"
              width="30px"
              className="m-2 object-contain"
            />
            <h1>Chamo-me</h1>
          </div>
          <h2 className="text-2xl text-center text-secondary font-bold">
            Yuri Manhiça!
          </h2>
        </div>
        <h4 className="pt-4 text-center text-md">
          Programador, atuando como Engenheiro de Software pela{" "}
          <strong>MALESOFTWARE</strong>.
        </h4>
        <div className="flex items-center flex-col gap-4 pt-2">
          <Button className="mt-4 flex justify-center" asChild>
            <a
              href="https://dbmib2q8rj.ufs.sh/f/Lm6xK3J7O1CLEMlyzsbWBDrHNlkZ671oFJq2IfGUwCjyX83S"
              target="_blank"
              className="click"
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
        <div></div>
      </div>
    </main>
  );
}
