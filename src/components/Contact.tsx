import instagram from "../assets/instagram.svg";
import github from "../assets/git-hub.svg";
import linkedin from "../assets/linkedin.svg";

export function Contact() {
  return (
    <div className="flex flex-col items-center gap-2 justify-center mb-36">
      <h2 className="text-[#7C8999] max-w-80 lg:max-w-full text-2xl text-center lg:text-4xl font-medium uppercase">
        Vamos trabalhar juntos para deixar
      </h2>
      <p className="text-white text-xl lg:text-3xl">
        Sua presença online incrível!
      </p>

      <a
        className="p-4 scale-90 lg:scale-100 px-8 mt-6 rounded-lg text-xl lg:text-3xl font-medium bg-gradient-to-r from-[#6366F1] to-[#008D68] transition-all duration-700 lg:hover:scale-105 hover:scale-95"
        href="https://api.whatsapp.com/send?phone=5511995052373&text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato."
        target="_blank"
      >
        Contate-me
      </a>

      <div className="flex lg:gap-6 mt-4 lg:mt-8">
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
  );
}
