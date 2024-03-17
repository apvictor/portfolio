export function Tech() {
  return (
    <div>
      <h2 className="text-4xl mb-10">Tecnologias</h2>
      <div className="flex gap-8 justify-between mb-28">
        <div className="bg-[#171717] rounded-3xl w-[700px] shadow-lg shadow-[#3e3e3e59] overflow-hidden">
          <div className="flex">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="max-w-[400px]">
          <h2 className="text-3xl font-medium uppercase mb-10">
            <span className="text-[#7C8999]">Minhas</span>
            <br /> Habilidades
          </h2>

          <p className="text-[#A6AEB8] text-2xl">
            Ao lado estão as tecnologias e frameworks que possuo habilidades e
            conhecimentos.
          </p>
        </div>
      </div>
    </div>
  );
}
