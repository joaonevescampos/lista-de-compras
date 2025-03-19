import List from "@/components/List";
import Menu from "@/components/Menu";

export default function MyLists() {
  return (
    <>
      <Menu />
      <main className="xl:ml-80 px-12 flex flex-col gap-8 pt-32 xl:pt-12">
        <h1 className="text-primaryColor font-bold text-3xl xl:text-4xl">Bem vindo, João!</h1>
        <h2 className="text-2xl font-bold">Minhas listas</h2>
        <div className="max-w-[800px] m-auto flex items-center justify-center flex-wrap gap-8 py-8">
            <List listName="Lista 1" />
            <List listName="Lista 2" />
            <List listName="Lista 3" />
            <List listName="Lista 4" />
        </div>
        <button className="fixed right-4 bottom-4 bg-green-700 rounded px-8 py-4 text-white cursor-pointer">
          Criar lista
        </button>
      </main>
    </>
  );
}
