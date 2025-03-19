import { BiLinkExternal } from "react-icons/bi";

// Interface para as propriedades do ProjectCard
interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

// Componente reutilizável para cada cartão de projeto
const ProjectCard = ({ image, title, description, link }: ProjectCardProps) => {
  return (
    <article className="flex flex-col w-full md:w-[500px]  rounded-2xl shadow-lg overflow-y-auto">
      <img
        src={image}
        alt={title}
        className="w-full h-[500px] object-cover object-top overflow-scroll"
      />
      <div className="p-6 bg-primary text-white">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-sm mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline flex gap-1 items-center hover:text-cyan-300 transition-colors"
        >
          Visitar
          <BiLinkExternal />
        </a>
      </div>
    </article>
  );
};

export default function Projects() {
  // Dados dos projetos (pode ser movido para um arquivo JSON ou banco de dados)
  const projects = [
    {
      image: "/Projeto.png",
      title: "FAST FOOD",
      description:
        "Este projeto foi desenvolvido para ajudar você a encontrar as suas refeições mais rápido. Com uma interface intuitiva e funcionalidades modernas, você pode escolher entre diversos restaurantes, decidir se deseja comer no local ou levar, e explorar os produtos disponíveis.",
      link: "https://github.com/yurimanhica-dev/ycm-donalts/blob/main/README.md",
    },
    {
      image: "/login.png",
      title: "SECRET FRIEND",
      description:
        "SecretFriend é o aplicativo perfeito para organizar e gerenciar seu amigo secreto de forma prática, divertida e sem complicações! Seja para festas de fim de ano, aniversários, eventos corporativos ou qualquer ocasião especial, o SecretFriend torna o sorteio e a troca de presentes mais emocionantes e organizados.",
      link: "https://github.com/yurimanhica-dev/ycm-donalts/blob/main/README.md",
    },
    {
      image: "/fswfood.png",
      title: "FSW FOOD'S",
      description:
        "Plataforma inovadora que reúne diversos restaurantes em um único espaço online, oferecendo uma experiência prática e acessível para quem deseja explorar diferentes opções gastronômicas. Com um catálogo variado de pratos, os usuários podem navegar, escolher e fazer pedidos de forma rápida e segura, garantindo comodidade e sabor na palma da mão.",
      link: "https://github.com/yurimanhica-dev/ycm-donalts/blob/main/README.md",
    },
    {
      image: "/fswbarber.png",
      title: "FSW BARBER",
      description:
        "Plataforma de agendamento de cortes de cabelo que oferece praticidade e controle total sobre sua experiência no salão. Com poucos cliques, você escolhe o estilo de corte desejado, seleciona o horário ideal e realiza o pagamento de forma segura. Garantimos conveniência, agilidade e um atendimento personalizado para deixar seu visual sempre impecável!",
      link: "https://github.com/yurimanhica-dev/ycm-donalts/blob/main/README.md",
    },
  ];

  return (
    <section id="project" className="w-full bg-primary py-20">
      <h1 className="text-4xl text-center text-white font-bold mb-12">
        Projetos
      </h1>
      <div className="bg-transparent mx-auto px-8">
        <div className="flex flex-col md:flex-wrap md:flex-row justify-center gap-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
