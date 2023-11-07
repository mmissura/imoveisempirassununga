import { BsWhatsapp } from 'react-icons/bs';

export const App = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen p-4">
      <h1 className="text-3xl font-bold 2xl:text-8xl xl:text-8xl lg:text-6xl mb-3">
        Imóveis em Pirassununga
      </h1>
      <h2 className="text-xl text-center font-bold 2xl:text-5xl xl:text-4xl lg:text-3xl">
        Encontre imobiliárias de Pirassununga e bons negócios
      </h2>
      <div className="grid grid-cols-12 gap-6 my-6">
        <div className="w-52 h-52 2xl:col-span-3 xl:col-span-3 lg:col-span-3 col-span-6 bg-green-600"></div>
        <div className="w-52 h-52 2xl:col-span-3 xl:col-span-3 lg:col-span-3 col-span-6 bg-blue-600"></div>
        <div className="w-52 h-52 2xl:col-span-3 xl:col-span-3 lg:col-span-3 col-span-6 bg-red-600"></div>
        <div className="w-52 h-52 2xl:col-span-3 xl:col-span-3 lg:col-span-3 col-span-6 bg-yellow-600"></div>
      </div>
      <h2 className="text-2xl text-center font-bold 2xl:text-4xl xl:text-4xl lg:text-2xl mb-4">
        Tem uma imobiliária e quer ver sua marca aqui? Fale conosco.
      </h2>
      <div className="text-5xl">
        <BsWhatsapp className="text-green-500 mb-5" />
      </div>
      <footer>&copy; Copyright 2023 by MM Desenvolvimentos</footer>
    </div>
  );
};
