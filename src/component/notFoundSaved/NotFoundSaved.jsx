import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundSaved = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-black">
      <img
        src="https://i.7fon.org/450/z171105.jpg" // Гифка с удивлением/ожиданием
        alt="No favorites yet"
        className="w-[400px] h-[400px] mb-6 rounded-xl shadow-lg "
      />
      <h2 className="text-3xl font-bold text-red-500 mb-2 animate-bounce">Пока пусто!</h2>
      <p className="text-gray-400 text-lg mb-4">
        Вы ещё ничего не добавили в избранное 😢  
        Тут пока только мы и немного Печали...
      </p>
      <Link
        to="/"
        className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow-md"
      >
        Найти что-то классное 🔍
      </Link>
    </div>
  );
};

export default NotFoundSaved;
