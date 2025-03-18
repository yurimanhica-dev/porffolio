export default function Projects() {
  return (
    <div className="flex flex-col gap-4 h-[100vh] bg-primary ">
      <h1 className="text-4xl text-center text-white font-bold mt-8">
        Projetos
      </h1>
      <div className="flex flex-col items-center gap-4 rounded-3xl relative h-[50vh]">
        <div className="w-[90vw] bg-white h-[50vh] rounded-t-4xl">
          <img
            src="/Projeto.png"
            alt="projects"
            className="relative rounded-4xl"
          />
        </div>
        <div className="flex items-center  absolute bottom-0 left-0 right-0 justify-between px-4">
          <a
            href="https://dbmib2q8rj.ufs.sh/f/Lm6xK3J7O1CLMPZPlU2GhbyvKOVYzPGHngrXQA9UcJLpslTB"
            target="_blank"
            className="line-clamp-1 underline-offset-4 underline text-sm text-secondary"
          >
            Saber Mais
          </a>

          <a
            href="https://dbmib2q8rj.ufs.sh/f/Lm6xK3J7O1CLMPZPlU2GhbyvKOVYzPGHngrXQA9UcJLpslTB"
            target="_blank"
            className="line-clamp-1 underline-offset-4 underline"
          >
            Visitar Pagina
          </a>
        </div>
      </div>
    </div>
  );
}
