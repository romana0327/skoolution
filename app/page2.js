"use client";
import '@fontsource/inter';
import Image from 'next/image';
import React, { useState } from 'react';
import './globals.css';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section with image */}
      <div className="md:w-1/2 h-64 md:h-auto  bg-blue-800">
      <p className="text-white  mt-40 ml-[130px] text-2xl leading-[normal] font-min [font-family 'inter-regular' , helvetica ]">Bienvenue  à</p>
      <div className=" flex items-center font-bold text-[50px] ml-[130px] w-200% lef3 left-0 absolute top-10 rounded-b-none mt-60 ">
      <span className="bg-white text-blue-800 px-2  rounded-none ">SK</span>
      <span className="text-white ml-0.5">OOLUTION</span>
     
    </div>
    <p className="w-10 text-1xl text-white mt-45 ml-33 left-0 absolute whitespace-nowrap ">La platefome d’éducation n°1 au Maroc.</p>
      </div>
      {/* Right Section */}
      <div className="md:w-1/2 flex flex-col justify-center p-8 max-w-xl w-full mx-auto">
        <h1 className="text-6xl font-bold mb-2 text-center md:text-left left-0">Se Connecter</h1>
        <p className="text-sm mb-6 text-center md:text-left mt-10 text-gray-500">Veuillez entrer vos informations!</p>

        <form className="space-y-4 mt-5">
          <p className="ml-5 text-gray-500">Adress email</p>
          <Image  src="/images/Vector.svg" alt="email" width={24}
  height={24} className=" left-0 ml-226 mt-3 absolute"/>
          <input
            type="email"
            placeholder=" | Ecrivez votre email ici..."
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
          />
          <Image  src="/images/Vector2.svg" alt="password" width={24}
  height={24} className=" left-0 ml-226 mt-12 absolute w-5"/>
              <p className="ml-5 text-gray-500" >Mot de passe</p>
          <input
            type="password"
            placeholder="| Ecrivez votre mot de passe ici..."
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500  pl-12 "
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center ">
              <input type="checkbox" className="mr-2 rounded accent-blue-500"  />
              <span className="text-gray-500">Se souvenir de moi</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">Mot de passe oublié?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0047BA] text-white py-2 rounded-md hover:bg-gray-300 transition"
          >
            Se Connecter
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">Ou</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center space-x-4">
            <button className=" hover:bg-gray-100">
              <Image src="/images/Group 1000004178 (1).svg" alt="google"  width={24}
  height={24} className="w-20 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:rounded-xl" />
            </button>
            <button className=" hover:bg-gray-100">
            <Image src="/images/Group 1000004177.svg" alt="FACEBOOK"  width={24}
  height={24} className="w-20 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:rounded-xl" />
            </button>
            <button className=" hover:bg-gray-100">
            <Image src="/images/Group 1000004179.svg" alt="tiktok"  width={24}
  height={24} className="w-20 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:rounded-xl"/>
            </button>
          </div>

          <p className="text-center text-sm mt-6 text-gray-500">
            Avez-vous déjà un compte ?{' '}
            <a href="#" className="text-blue-600 hover:underline">Cliquez ici!</a>
          </p>
        </form>
      </div>
    </div>
  );
}
