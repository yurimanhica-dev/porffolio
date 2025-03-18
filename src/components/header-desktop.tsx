export default function HeaderDesktop() {
  return (
    <div className="flex items-center shadow-primary shadow justify-between px-8 py-2 text-primary border-b-primary fixed top-0 right-0 left-0 z-50 bg-background">
      <h3 className="text-xl font-semibold ">Portfólio</h3>
      <div>
        <ul className="flex gap-4">
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
      <div>
        <button className="flex items-center px-4 py-2 text-white  hover:bg-primary-dark transition duration-300">
          <img src="/menu.png" alt="menu" width={16} height={16} />
        </button>
      </div>
    </div>
  );
}
