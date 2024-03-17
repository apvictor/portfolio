export function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="absolute w-full bottom-0 bg-[#171E29] h-20">
      <div className="w-full h-full flex items-center justify-center">
        <p>Armando Pereira © {date}</p>
      </div>
    </div>
  );
}
