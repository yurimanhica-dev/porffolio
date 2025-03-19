export default function Experiences() {
  return (
    <section
      id="experiencia"
      className="min-h-[50vh] flex flex-col items-center h-fit bg-white text-primary "
    >
      <h1 className="text-4xl font-extrabold mt-18 mb-8 ">Experiências</h1>
      <div className="grid grid-cols-1 md:grid-cols-3  w-full h-fit px-4 gap-8 lg:gap-18 md:mb-8 lg:mb-18 md:px-8 lg:px-16">
        <div>
          <div className="flex justify-center mb-6">
            <img src="logoMS.ico" alt="" className=" h-40" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Engenheiro de Software.</h2>
            <div className="flex w-full justify-between  md:flex-col md:mb-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 md:flex-col md:items-start">
                <p className="font-bold text-md ">MALESOFTWARE</p>

                <p className="font-bold text-md md:font-semibold -mt-2 sm:mt-0  md:-mt-2">
                  Praça da OMM, Maputo.
                </p>
              </div>
              <p className="text-sm text-secondary md:text-xs">
                Jun 2021 - Presente.
              </p>
            </div>
            <p className="text-sm mb-2 -mt-0.5">Tempo Integral.</p>
            <p className="text-sm md:line-clamp-14 xl:line-clamp-none">
              Responsável pela implementação Fullstack e manutenção de sistemas
              de Contabilidade, Recursos Humanos, Crédito e Seguros, para
              entidades desde Micro-finanças a Micro Bancos, utilizando
              frameworks ASP .NET em C# (Desktop) e Visual Basic (WEB), MS SQL
              Server como Base de Dados e Crystal Reports Viewer para
              visualização de relatórios. Destaco minha responsabilidade em dar
              assistência aos estagiários mostrando as práticas do
              desenvolvimento da MALESOFTWARE, integrando nossas aplicações com
              entidades como TabluTech e QI PAGA, escalando os nossos serviços
              através de APIs (Soap e REST).
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center mb-6">
            <img src="IPE.png" alt="" className=" h-40" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Formador de TIC's.</h2>
            <div className="flex w-full justify-between  md:flex-col md:mb-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 md:flex-col md:items-start">
                <p className="font-bold text-md ">IPET</p>

                <p className="font-bold text-md md:font-semibold -mt-2 sm:mt-0  md:-mt-2">
                  Alto Maé, Maputo.
                </p>
              </div>
              <p className="text-sm text-secondary md:text-xs">
                Fev - Jun 2022.
              </p>
            </div>
            <p className="text-sm mb-2 -mt-0.5">Tempo Integral.</p>
            <p className="text-sm md:line-clamp-14 xl:line-clamp-none">
              Durante o meu percurso acadêmico no módulo de Análise e Desenho de
              Sistemas de Informação, assumi diversos papéis essenciais. Criei
              aulas abrangentes com base no plano de ensino fornecido, adaptando
              várias abordagens para atender às necessidades dos alunos.
              Elaborei testes desafiadores e as respectivas correções. No final
              do curso, coordenei a avaliação final e organizei toda a
              documentação do módulo, garantindo um encerramento organizado e
              transparente. Essa experiência fortaleceu meu compromisso com a
              qualidade educacional e meu papel como facilitador do progresso
              dos alunos.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center mb-6">
            <img src="ISDB.png" alt="" className=" h-40" />
          </div>
          <div>
            <h2 className="text-lg uppercase font-bold">Licenciatura.</h2>
            <div className="flex w-full justify-between  md:flex-col md:mb-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 md:flex-col md:items-start">
                <p className="font-bold text-md ">ISDB</p>

                <p className="font-bold text-md md:font-semibold -mt-2 sm:mt-0  md:-mt-2">
                  Luís Cabral, Maputo.
                </p>
              </div>
              <p className="text-sm text-secondary md:text-xs">
                Fev 2019 - Dez 2023
              </p>
            </div>
            <p className="text-sm mb-2 -mt-0.5">Tempo Integral.</p>
            <p className="text-sm md:line-clamp-14 xl:line-clamp-none mb-14">
              Adquiri experiência em Redes de Computadores com GNS3 configurando
              switches e roteadores para projetos de laboratórios e protocolos
              de roteamento em todas as camadas tendo um conhecimento solido
              para que serve cada um, em desenvolvimento de aplicações
              utilizando Java com IntelliJ IDEA e spring Boot para criação de
              APIs RESTful e em Sistemas Operacionais usando Linux para
              configurações de servidores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
