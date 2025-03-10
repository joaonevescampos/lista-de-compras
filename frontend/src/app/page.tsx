import Image from "next/image";
import comprasImg from "../assets/img/compras.png";
import SignUp from "./signup/page";

export default function Login() {
  return (
    <main className="z-10 flex justify-between items-center w-screen h-screen m-auto">
      <section className=" flex flex-col items-center gap-48 w-[35%]">
          <form className="flex flex-col items-start">
          <legend className="text-primaryColor font-bold text-4xl mb-4 text-center w-full">Login</legend>
            <fieldset className="flex flex-col gap-4 bg-white p-8 rounded-2xl">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-base mb-1">e-mail</label>
                <input type="text" id="email" className="border-2 border-gray-200 w-80 h-12 p-4" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-base mb-1">senha</label>
                <input type="text" id="password" className="border-2 border-gray-200 w-80 h-12 p-4" />
            </div>
            <button type="submit" className="font-bold text-sm text-white bg-primaryColor py-2 rounded-md h-12 mt-8">Entrar</button>
            <div className="flex gap-2 items-center justify-center">
              <span className="text-sm text-center">Não possui conta?</span>
                <a href="/signup" className="text-primaryColor font-bold text-sm">
                  Criar aqui
                </a>
            </div>
            </fieldset> 
          </form>
        </section>
        <section className="bg-primaryColor w-[65%] h-full flex items-center flex-col justify-center">
          <h1 className="text-white font-bold text-5xl text-left">Lista de Compras</h1>
          <Image src={comprasImg} width={400} alt="compras" className="mt-8"/>
        </section>
    </main>
  );
}
