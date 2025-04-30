export default function LoginLeft() {
  return (
    <div className="w-full md:w-1/2 h-7000px] flex flex-col md:h-auto pt-70  bg-cover bg-center bg-[url('/sk/login.png')] ">
      <div className="bg-opacity-40 mt-[-90px] md:mt-[-190px] " />
      <div className=" z-10 flex flex-col justify-center h-full px-6 md:px-[130px] text-white">
        
        <p className="text-xl md:text-3xl md:text-1xl font-extralight">Bienvenue à
          <br/> <br/>
        </p>

        <div className="flex items-center font-bold text-3xl md:text-5xl mt-2">
          <span className="bg-white text-blue-800 px-2 bg-white/80">SK</span>
          <span className="ml-1 bg-clip-text text-transparent bg-white/80">OOLUTION</span>
        </div>

        <p className="text-xs mt-2 font-extralight">
          La plateforme d’éducation n°1 au Maroc.
        </p>
      </div>
    </div>
  );
}
