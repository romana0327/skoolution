export default function LoginLeft() {
    return (
      <div className=" md:w-[590px]  h-42 md:h-auto bg-blue-800 flex flex-col 
       justify-center relative text-2xl   bg-[url('/sk/loginimage.png')]  bg-cover
       bg-center md:h-auto  pb-60">    
                       <div className=" text-left mr-46 md:mt-120 mt-67 ">
        {/* Bienvenue */}
        <p className="text-white text-2xl leading-normal font-min font-extralight md:ml-[130px] text-center md:text-left text-left ml-6">
          Bienvenue à
        </p>
        
        {/* SKOOLUTION */}
        <div className="flex md:items-center font-bold md:text-[30px] sm:text-[50px] md:text-[50px] md:ml-[130px]
 md:text-center md:text-left md:mt-6 ml-6 ">
          <span className="bg-white/80 text-blue-800 md:px-2  ">SK</span>
          <span className=" md:ml-0.5 bg-white/80 bg-clip-text text-transparent ">OOLUTION</span>
        </div>
  
        {/* La plateforme d'éducation */}
        <p className=" whitespace-nowrap text-xs text-white md:mb-17 md:w-1/5 
         md:mr-53 sm:mt-4 md:mb-100 mx-auto md:ml-[130px] text-center md:text-left font-extralight ml-6">
          La plateforme d’éducation n°1 au Maroc.
        </p>
      </div></div>
    );
  }
  