import { BsWhatsapp } from 'react-icons/bs';

export const App = () => {
  return (
    <div className="w-full overflow-x-hidden bg-map">
      <div className="bg-black">
        <h1 className="text-3xl font-bold 2xl:text-8xl xl:text-8xl lg:text-6xl mt-10 text-white">
          Imóveis em Pirassununga
        </h1>
        <h2 className="text-xl text-center font-bold 2xl:text-5xl xl:text-4xl lg:text-3xl mt-8 text-white">
          Encontre imobiliárias de Pirassununga e bons negócios
        </h2>
        <div className="grid grid-cols-12 gap-7 my-20">
          <div className="2xl:w-52 xl:w-52 lg:w-52 w-full h-52 2xl:col-span-3 xl:col-span-3 lg:col-span-3 col-span-6 bg-white flex justify-center items-center">
            Logo 1
          </div>
          <div className="2xl:w-52 xl:w-52 lg:w-52 w-full h-52 2xl:col-span-3 xl:col-span-3 lg:col-span-3 col-span-6 bg-white flex justify-center items-center">
            Logo 2
          </div>
          <div className="2xl:w-52 xl:w-52 lg:w-52 w-full h-52 2xl:col-span-3 xl:col-span-3 lg:col-span-3 col-span-6 bg-white flex justify-center items-center">
            Logo 3
          </div>
          <div className="2xl:w-52 xl:w-52 lg:w-52 w-full h-52 2xl:col-span-3 xl:col-span-3 lg:col-span-3 col-span-6 bg-white flex justify-center items-center">
            Logo 4
          </div>
        </div>
        <h2 className="text-2xl text-center font-bold 2xl:text-4xl xl:text-4xl lg:text-2xl mb-12 text-white">
          Tem uma imobiliária e quer ver sua marca aqui? Fale conosco.
        </h2>
        <div>
          <button className="bg-green-500 text-white py-3 px-5 flex justify-center items-center gap-3 hover:bg-green-600 rounded-xl mb-12">
            <BsWhatsapp /> Fale com um especialista
          </button>
        </div>
        <footer className="text-white">
          &copy; Copyright 2023 by MM Desenvolvimentos
        </footer>
      </div>
    </div>
  );
};
