const categories = {
  MALESOFTWARE: [
    {
      icon: (
        <img
          src="/sqlserver.png"
          alt="C#"
          width={60}
          height={60}
          className="bg-white p-1"
        />
      ),
      name: "MS SQL Server",
    },
    {
      icon: <img src="/soapUI.jpg" alt="C#" width={60} height={60} />,
      name: "Soap UI",
    },
    {
      icon: <img src="/csharp.png" alt="C-Sharp" width={60} height={60} />,
      name: "C-Sharp (C#)",
    },
  ],
  "PROJETOS PESSOAIS": [
    {
      icon: <img src="/Docker.svg" alt="Docker" width={32} height={32} />,
      name: "Docker",
    },
    {
      icon: <img src="/ESLint.png" alt="ESLint" width={32} height={32} />,
      name: "ESLint",
    },
    {
      icon: <img src="/Figma.svg" alt="Figma" width={32} height={32} />,
      name: "Figma",
    },
    {
      icon: <img src="/Git.svg" alt="Git" width={32} height={32} />,
      name: "Git",
    },
    {
      icon: <img src="/GitHu.png" alt="GitHub" width={32} height={32} />,
      name: "GitHub",
    },
    {
      icon: <img src="/next.png" alt="Next.js" width={32} height={32} />,
      name: "Next.js",
    },
    {
      icon: (
        <img src="/PostgresSQL.png" alt="PostgreSQL" width={32} height={32} />
      ),
      name: "PostgreSQL",
    },
    {
      icon: <img src="/prisma.svg" alt="Prisma" width={32} height={32} />,
      name: "Prisma ORM",
    },
    {
      icon: <img src="/react.png" alt="React" width={32} height={32} />,
      name: "React",
    },
    {
      icon: (
        <img src="/tailwind.png" alt="Tailwind CSS" width={32} height={32} />
      ),
      name: "Tailwind CSS",
    },
    {
      icon: (
        <img src="/TypeScript.svg" alt="TypeScript" width={32} height={32} />
      ),
      name: "TypeScript",
    },
    {
      icon: <img src="/vite.png" alt="Vite.js" width={32} height={32} />,
      name: "Vite.js",
    },
  ],
};

export default function Techs() {
  return (
    <div className="bg-primary min-h-screen text-white p-8 flex flex-col justify-center">
      <h1 className="text-4xl text-secondary text-center font-bold mb-8">
        Tecnologias
      </h1>
      <p className="mb-10">
        Esta seção contém uma lista de tecnologias que uso no meu dia a dia.
        Divididas em tecnologias que uso na <strong>MALESoftware</strong> e as
        que utilizo para desenvolver meus projetos pessoais.
      </p>
      <div className="flex flex-col space-y-12 text-secondary">
        {Object.entries(categories).map(([category, techs]) => (
          <div key={category}>
            <h2 className="text-xl font-semibold mb-8 text-center">
              {category}
            </h2>
            <div className="flex justify-center gap-8 flex-wrap ">
              {techs.map((tech, index) => (
                <div key={index} className="flex flex-col items-center click">
                  {tech.icon}
                  <span className="text-gray-200 mt-2 ">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
