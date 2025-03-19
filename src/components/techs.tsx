const categories = {
  // MALESOFTWARE: [
  //   {
  //     icon: (
  //       <img
  //         src="/sqlserver.png"
  //         alt="C#"
  //         width={60}
  //         height={60}
  //         className="bg-white p-1"
  //       />
  //     ),
  //     name: "MS SQL Server",
  //   },
  //   {
  //     icon: <img src="/soapUI.jpg" alt="C#" width={60} height={60} />,
  //     name: "Soap UI",
  //   },
  //   {
  //     icon: <img src="/csharp.png" alt="C-Sharp" width={60} height={60} />,
  //     name: "C-Sharp (C#)",
  //   },
  // ],
  "": [
    {
      icon: <img src="/Docker.svg" alt="Docker" width={100} height={100} />,
      name: "Docker",
    },
    {
      icon: <img src="/ESLint.png" alt="ESLint" width={100} height={100} />,
      name: "ESLint",
    },
    {
      icon: <img src="/Figma.svg" alt="Figma" width={100} height={100} />,
      name: "Figma",
    },
    {
      icon: <img src="/Git.svg" alt="Git" width={100} height={100} />,
      name: "Git",
    },
    {
      icon: <img src="/GitHu.png" alt="GitHub" width={100} height={100} />,
      name: "GitHub",
    },
    {
      icon: <img src="/next.png" alt="Next.js" width={100} height={100} />,
      name: "Next.js",
    },
    {
      icon: (
        <img src="/PostgresSQL.png" alt="PostgreSQL" width={100} height={100} />
      ),
      name: "PostgreSQL",
    },
    {
      icon: <img src="/prisma.svg" alt="Prisma" width={100} height={100} />,
      name: "Prisma ORM",
    },
    {
      icon: <img src="/react.png" alt="React" width={100} height={100} />,
      name: "React",
    },
    {
      icon: (
        <img src="/tailwind.png" alt="Tailwind CSS" width={100} height={100} />
      ),
      name: "Tailwind CSS",
    },
    {
      icon: (
        <img src="/TypeScript.svg" alt="TypeScript" width={100} height={100} />
      ),
      name: "TypeScript",
    },
    {
      icon: <img src="/vite.png" alt="Vite.js" width={100} height={100} />,
      name: "Vite.js",
    },
  ],
};

export default function Techs() {
  return (
    <div className="bg-white  p-8 flex flex-col justify-center">
      <h1 className="text-4xl text-primary text-center font-bold mb-8">
        Techs
      </h1>
      <div className="flex flex-col space-y-12 mb-8">
        {Object.entries(categories).map(([category, techs]) => (
          <div key={category}>
            <h2 className="text-xl font-semibold text-center">{category}</h2>
            <div className="flex justify-center items-center  gap-8 flex-wrap">
              {techs.map((tech, index) => (
                <div key={index} className="flex flex-col items-center click">
                  {tech.icon}
                  <span className="mt-2 text-primary truncate">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
