import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });

      console.log(response.data.message);
      alert(response.data.message);

      // Redirection vers le dashboard
      window.location.href = 'https://skoolution.matboua.com/dashboard';
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError('Une erreur est survenue, veuillez réessayer.');
      }
    }
  };

  return (
    <div className="w-full md:w-[6900px] flex flex-col justify-center px-6 py-10 relative ">
      <div className="w-full max-w-md mx-auto  ">
        <div className="md:mb-14">
        <h1 className="text-3xl md:text-6xl md:mr-600 font-bold text-center md:text-left whitespace-nowrap">Se Connecter</h1>
        <p className="text-sm mt-2 mb-6 text-center md:text-left text-gray-500">
          Veuillez entrer vos informations!
        </p></div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="relative">
            <p className="text-gray-500 mb-1">Adresse email</p>
            <Image
              src="/sk/Vector.svg"
              alt="email"
              width={20}
              height={20}
              className="absolute top-10 left-3 md:mt-[7px]  md:ml-[5px]"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="       |Ecrivez votre email ici..."
              className="w-full border py-3 pl-10 pr-3 text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-125"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <p className="text-gray-500 mb-1">Mot de passe</p>
            <Image
              src="/sk/vector2.svg"
              alt="password"
              width={20}
              height={20}
              className="absolute top-10  left-3 w-4 ml-1  md:mt-[4px]  md:ml-[7px]"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="       |Ecrivez votre mot de passe ici..."
              className="w-full border py-3 pl-10 pr-3 text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-125"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>Se souvenir de moi</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">Mot de passe oublié ?</a>
          </div>

          <button type="submit" className=" py-3 w-full bg-[#0047BA] text-white py-2 rounded-md hover:bg-gray-400 transition md:w-125">
            Se Connecter
          </button>
        </form>

        {/* Message d'erreur */}
        {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}

        {/* Séparateur */}
        <div className="flex items-center my-6 md:w-125">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm ">Ou</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Boutons sociaux */}
        <div className="flex justify-center space-x-4 md:w-125">
          <Image src="/sk/Group 1000004178.svg" alt="google" width={50} height={40} className="md:w-18  hover:scale-104 transition  " />
          <Image src="/sk/Group 1000004177.svg" alt="facebook" width={50} height={40} className="md:w-18 hover:scale-105 transition  " />
          <Image src="/sk/Group 1000004179.svg" alt="tiktok" width={50} height={40} className="md:w-18 hover:scale-105 transition  " />
        </div>

        {/* Lien d'inscription */}
        <p className="text-center text-sm text-gray-500 mt-4 md:w-125">
          Vous n'avez pas de compte ? <a href="#" className="text-blue-600 hover:underline">Cliquez ici!</a>
        </p>
      </div>
    </div>
  );
}
