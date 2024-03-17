import andicon from "../assets/and-icone.svg";
import bug1 from "../assets/bug-icone.svg";
import bug2 from "../assets/bug2-icone.svg";
import chave1 from "../assets/chave-1.svg";
import chave2 from "../assets/chave-2.svg";
import vscode from "../assets/vs-code-ilustration.svg";
import vscodeicon from "../assets/vs-code-icon.svg";

export function Section() {
  return (
    <div className="flex justify-between relative my-24 lg:my-48">
      <div className="absolute left-48 lg:-top-[10%] w-1/2">
        <img src={andicon} alt="&&" width={280} height={160} />
      </div>

      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div className="max-w-[520px]">
          <div className="flex flex-col gap-2 mb-11 text-3xl lg:text-4xl uppercase">
            <h2 className="text-[#7C8999]">Desenvolvimento</h2>
            <span className="text-white">Tecnologia</span>
          </div>

          <div className="flex flex-col gap-10 lg:gap-20">
            <div>
              <h3 className="text-white text-xl lg:text-2xl font-medium uppercase mb-4 lg:mb-6">
                IMPULSIONO SEU OBJETIVO
              </h3>
              <p className="text-[#A6AEB8] text-base lg:text-xl -tracking-[0.117px] leading-7">
                Meu objetivo é desenvolver interfaces atraentes e intuitivas que
                melhorem a usabilidade e satisfação dos usuários.
              </p>
            </div>
            <div>
              <h3 className="text-white text-xl lg:text-2xl font-medium uppercase mb-4 lg:mb-6">
                SOLUÇOES CRIATIVAS | DESIGN RESPONSIVO
              </h3>
              <p className="text-[#A6AEB8] text-base lg:text-xl -tracking-[0.117px] leading-7">
                Ao garantir que seu site seja responsivo, você está preparado
                para enfrentar os desafios do mundo digital e oferecer o melhor
                para seus visitantes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 lg:pr-28">
          <div className="relative">
            <img src={vscode} alt="vscode" width={400} height={330} />

            <img
              className="absolute -left-[115px] -top-20"
              src={chave1}
              alt="chave"
              width={96}
              height={250}
            />

            <img
              className="scale-75 lg:scale-100 absolute -left-7 -bottom-1 translate-y-10 hover:scale-110 transition-all duration-700"
              src={vscodeicon}
              alt="vscode"
              width={120}
              height={120}
            />

            <img
              className="absolute -right-9 scale-75 lg:scale-100 lg:-right-[115px] top-38"
              src={chave2}
              alt="chave"
              width={96}
              height={250}
            />

            <div className="scale-75 lg:scale-100 absolute -right-[10%] top-[10%] flex flex-col items-center justify-center gap-5 p-3 bg-[#8282845e] backdrop-blur-sm rounded-2xl">
              <img src={bug1} alt="bug" width={40} height={30} />
              <img src={bug2} alt="bug" width={40} height={30} />
            </div>
          </div>
          <p className="lg:max-w-[400px] text-[#A6AEB8] text-base lg:text-xl mt-14 -tracking-[0.117px] leading-7">
            Estou constantemente atualizado com as últimas tendências e
            tecnologias, buscando aprimorar minha expertise para oferecer
            resultados excepcionais.
          </p>
        </div>
      </div>
    </div>
  );
}
