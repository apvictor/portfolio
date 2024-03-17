import prefil from "../assets/perfil.png";
import vscode from "../assets/vscode-bar.png";
import figma from "../assets/figma.svg";
import vscodeicon from "../assets/vs-code-icon.svg";

export function About() {
  const year = new Date().getFullYear();

  return (
    <div id="about" className="flex flex-col mt-10 lg:mt-40 mb-16 lg:mb-32">
      <h2 className="text-white text-4xl lg:mb-10">Sobre mim</h2>

      <div className="flex justify-between items-center gap-8 lg:gap-5 flex-wrap">
        <div className=" w-[454px] h-[500px]">
          <div className="relative top-[73px] w-[350px] h-[387px] rounded-3xl rounded-tr-[200px] bg-[#2f2f2f63] z-10">
            <img
              width={340}
              className="absolute -bottom-6 left-6 z-10"
              src={prefil}
              alt="perfil"
            />
            <img
              className="absolute w-10 h-[480px] -top-11 left-0 z-10"
              src={vscode}
              alt="vscode"
            />
            <img
              style={{
              }}
              className="absolute w-32 h-40 blur-sm -top-0 left-14"
              src={figma}
              alt="figma"
            />

            <img
              style={{
                animation: "move 3s ease-in-out infinite alternate",
              }}
              className="absolute w-32 h-40 blur-sm bottom-6 -right-6 z-20"
              src={vscodeicon}
              alt="figma"
            />

            <div className="absolute transition-all duration-500 w-96 h-96 bg-[#7da1b6b7] rounded-full blur-[200px] z-[2px]"></div>
          </div>
        </div>

        <div
          className="bg-[#171717] max-w-[740px] lg:max-h-[500px] min-h-[500px] rounded-3xl p-10 flex flex-col relative -z-[1px]"
          style={{
            boxShadow: "0px 0.8px 2.5px 0px #3e3e3e59",
          }}
        >
          <span className="rounded-xl bg-[#2B2B2B] w-max text-white text-lg lg:text-xl font-medium py-3 px-7 uppercase mb-12">
            São Paulo - SP
          </span>
          <div className="text-base lg:text-xl flex flex-col justify-between">
            <p className="text-white leading-loose tracking-wide">
              Olá, me chamo Armando tenho {year - 1998} anos e sou Desenvolvedor
              Full Stack com experiência em React.js, Node, JavaScript,
              TypeScript, PHP, entre outras tecnologias. <br />
            </p>
            <p className="mt-8">
              Apaixonado pelo desenvolvimento de sistemas em geral e por tudo
              que envolva códigos.
            </p>
            <p className="mt-8">
              Estou pronto para enfrentar novos desafios e contribuir com
              soluções inovadoras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
