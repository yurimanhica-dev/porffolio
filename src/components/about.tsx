export default function About() {
  return (
    <div className="px-4 py-8 bg-secondary h-[95vh] flex flex-col justify-center">
      <h1 className="text-3xl mb-2 font-bold text-primary">Sobre mim</h1>
      <p className="text-primary">
        Sou Licenciado em Administração de Sistemas de Redes Informáticas pela
        ISDB, com mais de 3 anos de experiência em Engenharia de Software. Como
        desenvolvedor fullstack, atuo na implementação e manutenção de sistemas
        de Contabilidade, Patrimônio, Recursos Humanos, Crédito e Seguros,
        garantindo sempre privacidade de dados e performance otimizada. Trabalho
        com
        <strong> C#, MS SQL Server e Crystal Reports Viewer</strong>, integrando
        APIs e desenvolvendo soluções intuitivas para facilitar a experiência do
        usuário. Minha abordagem prioriza organização, lógica de programação
        eficiente e adaptação a novas tecnologias, colaborando remotamente com
        equipes para entregar projetos dentro dos prazos e padrões exigidos.
      </p>
      <div className="flex items-center justify-center m-auto">
        <img
          src="/about.png"
          alt="profile"
          width={300}
          height={300}
          className="rounded-4xl click"
        />
      </div>
    </div>
  );
}
