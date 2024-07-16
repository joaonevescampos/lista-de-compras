import Image from "next/image";
import SignUp from "./signup/page";

export default function Home() {
  return (
    <main className="z-10">
      <div className="absolute top-0 left-0 flex flex-col items-center gap-48 w-screen h-screen bg-gradient-to-b from-primaryColor to-secondaryColor p-8">
        <h1 className="text-white font-bold text-3xl text-left">Lista de Compras</h1>
          <form className="flex flex-col items-start">
          <legend className="text-white font-bold text-xl mb-4">Login</legend>
            <fieldset className="flex flex-col gap-4 bg-white p-8 rounded-2xl">
              <div className="flex flex-col">
                <label htmlFor="email" className="font-bold text-sm">e-mail</label>
                <input type="text" id="email" className="border-2 border-gray-300 w-64" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="font-bold text-sm">senha</label>
                <input type="text" id="password" className="border-2 border-gray-300 w-64" />
            </div>
            <button type="submit" className="font-bold text-sm text-white bg-primaryColor py-2 rounded">Entrar</button>
            <span className="text-sm text-cen">Não possui conta? <a href="/signup" className="text-primaryColor font-bold">Criar aqui</a></span>
            </fieldset>
            
          </form>
        </div>
    </main>
  );
}
