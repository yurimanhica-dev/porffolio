import { BiLinkExternal } from "react-icons/bi";

export default function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full h-fit bg-primary ">
      <h1 className="text-4xl text-center text-white font-bold m-8">
        Projetos
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 px-2 mb-8">
        <div className="flex flex-col w-130 px-8 justify-center items-center gap-4 relative lg:-mt-4">
          <div className="space-y-4 bg-white rounded-2xl">
            <img
              src="/Projeto.png"
              alt="projects"
              className="w-[500px] h-[400px] rounded-t-2xl shadow-md object-cover object-top"
            />
          </div>
          <div className="pb-5 pt-2 px-4 text-white">
            <h4 className="text-sm font-semibold mb-2">FAST FOOD.</h4>
            <p className="text-xs mb-2">
              Este projeto foi desenvolvido para ajudar você a encontrar as suas
              refeições mais rápido. Com uma interface intuitiva e
              funcionalidades modernas, você pode escolher entre diversos
              restaurantes, decidir se deseja comer no local ou levar, e
              explorar os produtos disponíveis.
            </p>
            <a
              href="https://github.com/yurimanhica-dev/ycm-donalts/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline flex gap-1 items-center"
            >
              Visitar
              <BiLinkExternal />
            </a>
          </div>
        </div>
        <div className="flex flex-col w-130 px-8 justify-center items-center gap-4 relative">
          <div className="space-y-4 bg-white rounded-2xl">
            <img
              src="/login.png"
              alt="projects"
              className="w-[500px] h-[400px] rounded-t-2xl shadow-md object-cover object-top"
            />
          </div>
          <div className="pb-5 pt-2 px-4 text-white">
            <h4 className="text-sm font-semibold mb-2">SECRET FRIEND.</h4>
            <p className="text-xs mb-2">
              SecretFriend é o aplicativo perfeito para organizar e gerenciar
              seu amigo secreto de forma prática, divertida e sem complicações!
              Seja para festas de fim de ano, aniversários, eventos corporativos
              ou qualquer ocasião especial, o SecretFriend torna o sorteio e a
              troca de presentes mais emocionantes e organizados.
            </p>
            <a
              href="https://github.com/yurimanhica-dev/ycm-donalts/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline flex gap-1 items-center"
            >
              Visitar
              <BiLinkExternal />
            </a>
          </div>
        </div>
        <div className="flex flex-col w-130 px-8 justify-center items-center gap-4 relative">
          <div className="space-y-4 h-[50%] bg-white rounded-2xl">
            <img
              src="/fswfood.png"
              alt="projects"
              className="w-[500px] h-[400px] rounded-t-2xl shadow-md object-cover object-top"
            />
          </div>
          <div className="pb-5 pt-2 px-4 text-white">
            <h4 className="text-sm font-semibold mb-2">FSW FOOD'S.</h4>
            <p className="text-xs mb-2">
              Plataforma inovadora que reúne diversos restaurantes em um único
              espaço online, oferecendo uma experiência prática e acessível para
              quem deseja explorar diferentes opções gastronômicas. Com um
              catálogo variado de pratos, os usuários podem navegar, escolher e
              fazer pedidos de forma rápida e segura, garantindo comodidade e
              sabor na palma da mão.
            </p>
            <a
              href="https://github.com/yurimanhica-dev/ycm-donalts/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline flex gap-1 items-center"
            >
              Visitar
              <BiLinkExternal />
            </a>
          </div>
        </div>
        <div className="flex flex-col w-130 px-8 justify-center items-center gap-4 relative">
          <div className="space-y-4 h-[50%] bg-white rounded-2xl">
            <img
              src="/fswbarber.png"
              alt="projects"
              className="w-[500px] h-[400px] rounded-t-2xl shadow-md object-cover object-top"
            />
          </div>
          <div className="pb-5 pt-2 px-4 text-white">
            <h4 className="text-sm font-semibold mb-2">FSW BARBER.</h4>
            <p className="text-xs mb-2">
              Plataforma de agendamento de cortes de cabelo que oferece
              praticidade e controle total sobre sua experiência no salão. Com
              poucos cliques, você escolhe o estilo de corte desejado, seleciona
              o horário ideal e realiza o pagamento de forma segura. Garantimos
              conveniência, agilidade e um atendimento personalizado para deixar
              seu visual sempre impecável!
            </p>
            <a
              href="https://github.com/yurimanhica-dev/ycm-donalts/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline flex gap-1 items-center"
            >
              Visitar
              <BiLinkExternal />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
