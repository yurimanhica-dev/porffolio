import { ChevronRightIcon } from "lucide-react";

export default function About() {
  return (
    <section
      id="sobre-mim"
      className="px-12 py-8 bg-secondary h-fit min-h-[70vh]  flex flex-col justify-center xl:gap-48  items-center  md:gap-20 md:px-8 lg:px-20 md:flex-row  xl:min-h-[95vh]"
    >
      <div className="md:w-[50%] xl:w-[30%] mt-6">
        <h1 className="text-5xl font-bold text-white">Mais</h1>
        <h3 className="text-3xl mb-6 font-bold text-primary">Sobre mim </h3>
        <p className="text-primary line-clamp-6 lg:line-clamp-10 xl:line-clamp-12 mb-4">
          Sou Licenciado em Administração de Sistemas de Redes Informáticas pela
          ISDB, com mais de 3 anos de experiência em Engenharia de Software.
          Como desenvolvedor fullstack, atuo na implementação e manutenção de
          sistemas de Contabilidade, Patrimônio, Recursos Humanos, Crédito e
          Seguros, garantindo sempre privacidade de dados e performance
          otimizada. Trabalho com
          <strong> C#, MS SQL Server e Crystal Reports Viewer</strong>,
          integrando APIs e desenvolvendo soluções intuitivas para facilitar a
          experiência do usuário. Minha abordagem prioriza organização, lógica
          de programação eficiente e adaptação a novas tecnologias, colaborando
          remotamente com equipes para entregar projetos dentro dos prazos e
          padrões exigidos.
        </p>
        <a
          href=""
          className="text-primary underline flex items-center justify-start"
        >
          <span className="font-bold">Saiba mais</span>
          <ChevronRightIcon />
        </a>
      </div>
      <div className="flex items-center justify-center mt-12">
        <img
          src="/about.png"
          alt="profile"
          className="rounded-4xl click w-70 md:w-70 xl:w-80"
        />
      </div>
    </section>
  );
}
