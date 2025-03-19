import { ArrowUp, Github, LinkedinIcon } from "lucide-react";
import { DiReact } from "react-icons/di";

export default function Footer() {
  // Função para voltar ao topo suavemente
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-primary px-6 py-4 flex flex-col md:flex-row justify-between items-center text-zinc-300">
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center gap-2 text-lg font-medium">
          <p>Desenvolvido por &copy; Yuri Manhiça</p>
          <DiReact className="text-blue-400 text-xl animate-spin-slow" />
        </div>
        <p className="text-sm opacity-80">Todos os direitos reservados.</p>
      </div>

      <div className="flex gap-4 mt-4 md:mt-0">
        <a
          href="https://www.linkedin.com/in/yuri-manhiça/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-white transition duration-300"
        >
          <LinkedinIcon size={24} />
        </a>
        <a
          href="https://www.github.com/YuriManhica/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-white transition duration-300"
        >
          <Github size={24} />
        </a>
      </div>

      {/* Botão Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 cursor-pointer right-5 bg-secondary animate-bounce ease-in-out  hover:bg-primary text-white p-3 rounded-full shadow-lg transition duration-500"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
