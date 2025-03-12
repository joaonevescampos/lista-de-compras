import List from "@/components/List";
import Link from "next/link";
import Image from "next/image";
import comprasImg from "../../assets/img/compras.png";

export default function MyLists() {
  return (
    <>
      <menu className="bg-secondaryColor text-white xl:h-screen h-24 w-full xl:w-80 fixed flex xl:flex-col flex-row gap-8 p-8">
        <h2 className="font-bold hidden xl:block">Menu</h2>
        <hr />
        <Link href="/mylists" className="font-bold">Home</Link>
        <Link href="/mylists" className="font-bold">Meu perfil</Link>
        <Link href="/mylists" className="font-bold absolute top-8 right-8 xl:static">Sair</Link>
        <Image
            src={comprasImg}
            width={400}
            alt="compras"
            className="hidden xl:block"
          />
      </menu>
      <main className="xl:ml-80 px-12 flex flex-col gap-8 pt-32 xl:pt-12">
        <h1 className="text-primaryColor font-bold text-4xl">Bem vindo, João!</h1>
        <h2 className="text-2xl font-bold mb-8">Minhas listas</h2>
        <div className="max-w-[800px] m-auto flex items-center justify-center flex-wrap gap-8 ">
            <List listName="Lista 1" />
            <List listName="Lista 2" />
            <List listName="Lista 3" />
            <List listName="Lista 4" />

        </div>
        <button className="fixed right-4 bottom-4 bg-green-700 rounded px-8 py-4 text-white cursor-pointer">
          Criar uma lista
        </button>
      </main>
    </>
  );
}
