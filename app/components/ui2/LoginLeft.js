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
      // Envoi des données à l'API NestJS
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });

      // Si la connexion est réussie
      console.log(response.data.message);
      alert(response.data.message); // Afficher un message de succès (à remplacer par une gestion d'état plus élégante)

    } catch (err) {
      // En cas d'erreur
      if (err.response) {
        setError(err.response.data.message); // Message d'erreur renvoyé par le backend (401 par exemple)
      } else {
        setError('Une erreur est survenue, veuillez réessayer.');
      }
    }
  };

  return (
    <div className="  flex flex-col justify-between relative md:p-6 md:pl-6  mt-20 mb-70 md:mb-50">
      <div className=" md:ml-46 md:mt-30 mt-[-30px]  ">
        <div className="md:mt-[-80px]">
        <h1 className=" md:text-6xl text-3xl font-bold text-center md:text-left ml-5 text-left ">Se Connecter</h1>
        <p className="text-sm md:mt-2 md:mb-14 text-center md:text-left text-gray-500 ml-5 text-left md:w-text-xl ">
          Veuillez entrer vos informations!
        </p></div>

        <form onSubmit={handleSubmit} className="space-y-4 w-80 ml-7 mt-3">
          {/* email */}
          <div className="relative md-max-w[1000px] w-full">
            <p className="md:ml-5 text-gray-500 ">Adresse email</p>
            <Image src="/sk/Vector.svg" alt="email" width={24} height={24} className="absolute md:ml-5 md:mt-4
             md:w-6 w-[20px] mt-[10px] ml-2" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="          | Ecrivez votre email ici..."
              className="w-full md:w-130 border md:py-3 py-1 md:px-3 md:pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-xs placeholder:text-ml-20"
            />
          </div>

          {/* password */}
          <div className="relative ">
            <p className="md:ml-5 text-gray-500">Mot de passe</p>
            <Image src="/sk/vector2.svg" alt="password" width={24} height={24} className="absolute md:ml-5
             md:mt-[10px] md:w-[19px] mt-[8px] ml-[10px] w-4" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="          | Ecrivez votre mot de passe ici..."
              className="md:w-130 border md:py-3 py-1  md:px-3 md:pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-xs placeholder:text-ml-20"
            />
          </div>

          <div className="flex items-center justify-between text-sm whitespace-nowrap">
            <label className="flex items-center">
              <input type="checkbox" className="md:mr-2 rounded accent-blue-500" />
              <span className="text-gray-500">Se souvenir de moi</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline md:ml-57 ">Mot de passe oublié ?</a>
          </div>

          <button type="submit" className="md:w-130 w-full bg-[#0047BA] text-white py-2 rounded-md hover:bg-gray-300 transition md:py-3"
           onClick={() => window.location.href = 'https://skoolution.matboua.com/dashboard'}>
            Se Connecter
          </button>
        </form>

        {/* Error message */}
        {error && <p className="text-red-500 text-sm text-center md:mt-4">{error}</p>}
      </div>

      {/* Social login */}
          <div className="md:mb-50 md:ml-6">
        <div className="flex items-center md:my-4 md:ml-47 md:w-130 md:my-1">
          <hr className="flex-grow border-gray-400" />
          <span className="md:px-2 text-gray-500 text-sm">Ou</span>
          <hr className="flex-grow border-gray-400" />
        </div>

        <div className="flex justify-center space-x-4 md:mb-4 md:ml-50">
          <Image src="/sk/Group 1000004178.svg" alt="google" width={40} height={40} className="hover:scale-105 transition md:w-19 w-15" />
          <Image src="/sk/Group 1000004177.svg" alt="facebook" width={40} height={40} className="hover:scale-105 transition  md:w-19  w-15" />
          <Image src="/sk/Group 1000004179.svg" alt="tiktok" width={40} height={40} className="hover:scale-105 transition  md:w-19  w-15" />
        </div>

        <p className="text-center text-sm text-gray-500 md:ml-50">
          Vous n'avez pas de compte ? <a href="#" className="text-blue-600 hover:underline">Cliquez ici!</a>
        </p>
     
    </div></div>
  );
}
