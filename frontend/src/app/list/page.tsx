import Menu from "@/components/Menu";

export default function List() {
  return (
    <>
      <Menu />
      <main className="xl:ml-80 px-12 flex flex-col gap-8 pt-32 xl:pt-12">
        <h1 className="text-2xl font-bold">Lista de compras 1</h1>
        <h2 className="text-2xl font-bold">Categorias</h2>
        <div className="flex flex-col xl:flex-row xl:justify-between xl:w-[900px] gap-4 my-4 m-auto">
          <section className="flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center border-primaryColor border-2 px-24 py-8">
              <span className="text-xl font-bold">Básicos</span>
            </div>
            <div className="flex flex-col justify-center items-center border-primaryColor border-2 px-24 py-8">
              <span className="text-xl font-bold">Frutas</span>
            </div>
            <div className="flex flex-col justify-center items-center border-primaryColor border-2 px-24 py-8">
              <span className="text-xl text-center font-bold">Verduras e Legumes</span>
            </div>
            <div className="flex flex-col justify-center items-center border-primaryColor border-2 px-24 py-8">
              <span className="text-xl font-bold">Bebidas</span>
            </div>
            <div className="flex flex-col justify-center items-center border-primaryColor border-2 px-24 py-8">
              <span className="text-xl font-bold">Carnes</span>
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center border-primaryColor border-2 px-24 py-8">
              <span className="text-xl font-bold">Básicos</span>
            </div>
            <div className="flex flex-col justify-center items-center border-primaryColor border-2 px-24 py-8">
              <span className="text-xl font-bold">Frutas</span>
            </div>
            <div className="flex flex-col justify-center items-center border-primaryColor border-2 px-24 py-8">
              <span className="text-xl font-bold">Verduras e Legumes</span>
            </div>
            <div className="flex flex-col justify-center items-center border-primaryColor border-2 px-24 py-8">
              <span className="text-xl font-bold">Bebidas</span>
            </div>
            <div className="flex flex-col justify-center items-center border-primaryColor border-2 px-24 py-8">
              <span className="text-xl font-bold">Carnes</span>
            </div>
          </section>
        </div>
        <button className="fixed right-4 bottom-4 bg-green-700 rounded px-8 py-4 text-white cursor-pointer">
          Criar lista
        </button>
      </main>
    </>
  );
}
