import vscode from "../assets/vscode-background.svg";
import instagram from "../assets/instagram.svg";
import github from "../assets/git-hub.svg";
import linkedin from "../assets/linkedin.svg";
import perfil from "../assets/perfil.png";
import computer from "../assets/computer.svg";
import structure from "../assets/tree-structure.svg";
import react from "../assets/react-element.svg";
import pointer from "../assets/pointer.png";

export function Profile() {
  return (
    <div className="flex xl:flex-row flex-col items-center justify-between gap-16 mt-6 lg:mt-24">
      <div className="flex flex-col gap-8 lg:gap-16">
        <div className="flex flex-col relative">
          <span className="text-[#3DD8BC] text-base lg:text-xl mb-4">
            Olá, seja bem vindo!
          </span>
          <h1 className="text-3xl lg:text-6xl font-semibold mb-2 lg:mb-6">
            Full Stack Developer
          </h1>
          <p className="text-[#A6AEB8] font-normal text-base lg:text-xl max-w-[33rem]">
            Construindo interfaces web envolventes e sistemas de alto nível para
            experiências excepcionais
          </p>
          <img
            className="absolute right-1 w-1/2 -z-10"
            src={vscode}
            alt="VSCODE"
          />
        </div>

        <div className="flex flex-col items-center lg:flex-row gap-4 lg:gap-8">
          <a
            className="p-4 px-8 scale-90 text-xl text-nowrap w-fit flex items-center justify-center rounded-lg lg:text-3xl font-medium bg-gradient-to-r from-[#6366F1] to-[#008D68] transition-all duration-700 hover:scale-95 lg:hover:scale-105"
            href="https://api.whatsapp.com/send?phone=5511995052373&text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato."
            target="_blank"
          >
            Contate-me
          </a>

          <div className="flex w-full items-center justify-center gap-1 lg:gap-8">
            <button className="p-4 scale-75 lg:scale-100 rounded-lg text-3xl border-2 border-[#FFF] transition-all duration-700 lg:hover:scale-105 hover:scale-90 hover:bg-[#000000]">
              <img
                src={github}
                alt="Logo github"
                className="lg:w-8 lg:h-8 w-6 h-6"
              />
            </button>
            <button className="p-4 scale-75 lg:scale-100 rounded-lg text-3xl border-2 border-[#FFF] transition-all duration-700 lg:hover:scale-105 hover:scale-90 hover:bg-[#E51F66]">
              <img
                src={instagram}
                alt="Logo instagram"
                className="lg:w-8 lg:h-8 w-6 h-6"
              />
            </button>
            <button className="p-4 scale-75 lg:scale-100 rounded-lg text-3xl border-2 border-[#FFF] transition-all duration-700 lg:hover:scale-105 hover:scale-90 hover:bg-[#2159C1]">
              <img
                src={linkedin}
                alt="Logo linkedin"
                className="lg:w-8 lg:h-8 w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="relative lg:mr-14">
        <div className="-z-10 absolute bottom-0 top-14 -left-10 w-96 h-96 rounded-full bg-[#7da1b67d] blur-[200px]"></div>
        <div
          className="rounded-full bg-covers w-[319px] h-[400px]"
          style={{
            // width: 319,
            // height: 400,
            backgroundImage: `url(${perfil})`,
            backgroundPosition: "top",
          }}
        ></div>
        <div
          className="absolute bottom-0 w-[24%] h-[16%] p-4 flex items-center justify-center rounded-xl
          border border-[#b2b4bb0f]
          backdrop-blur-sm bg-white/30
          drop-shadow-[0px_0px_52px_#ffffff3f]"
        >
          <img width={50} height={50} src={react} alt="React" />
        </div>
        <div
          className="absolute bottom-20 -right-8 w-[24%] h-[16%] p-4 flex items-center justify-center rounded-xl
          border border-[#b2b4bb0f]
          backdrop-blur-sm bg-white/30
          drop-shadow-[0px_0px_52px_#ffffff3f]"
        >
          <img width={50} height={50} src={computer} alt="Computador" />
        </div>
        <div
          className="absolute top-10 -left-10 w-[24%] h-[16%] p-4 flex items-center justify-center rounded-xl
          border border-[#b2b4bb0f]
          backdrop-blur-sm bg-white/30
          drop-shadow-[0px_0px_52px_#ffffff3f]"
        >
          <img width={50} height={50} src={structure} alt="Estrutura" />
        </div>
        <img
          style={{
            animation: "pointer 12s infinite",
          }}
          className="absolute -bottom-[5%] left-10"
          width={50}
          height={50}
          src={pointer}
          alt="Cursor"
        />
      </div>
    </div>
  );
}
