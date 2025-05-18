import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-center px-4">
      <img
        src="https://foni.papik.pro/uploads/posts/2024-10/foni-papik-pro-0dfq-p-kartinki-golovolomka-gnev-na-prozrachnom-f-13.png" // мультяшный персонаж
        alt="Funny Cartoon"
        className="w-[400] h-[400px] mb-6 rounded-xl shadow-lg"
      />
      <h1 className="text-7xl font-extrabold text-red-600 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-gray-200 mb-2">Ой! Ты потерялся в темноте 😵‍💫</h2>
      <p className="text-gray-400 mb-6">
        Гнев в гневе. Немедленно вернись на главную, пока Гнев не начал гневеть!
      </p>
      <Link
        to="/"
        className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow-lg"
      >
        Быстро вырнись домой ! 🏠
      </Link>
    </div>
  );
};

export default NotFound;
