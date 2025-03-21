import Menu from "@/components/Menu";
import Link from "next/link";

export default function ListCategories() {
  const categories = [
    { id: 1, name: "Básicos", icon: "📦" },
    { id: 2, name: "Frutas", icon: "🍎" },
    { id: 3, name: "Verduras e Legumes", icon: "🥦" },
    { id: 4, name: "Bebidas", icon: "🥤" },
    { id: 5, name: "Laticínios e ovos", icon: "🥛" },
    { id: 6, name: "Carnes", icon: "🥩" },
    { id: 7, name: "Higiene e Limpeza", icon: "🧼" },
    { id: 8, name: "Frios", icon: "🧀" },
    { id: 9, name: "Pet", icon: "🐶" },
    { id: 10, name: "Padaria", icon: "🥖" },
    { id: 11, name: "Utensílios e ferramentas", icon: "🔧" },
    { id: 12, name: "Outros", icon: "📌" },
  ];

  function formatCategoryToPath(category: string) {
    return category
      .toLowerCase()
      .normalize("NFD")
      .replaceAll(" ", "-")
      .replace(/ç/g, "c")
      .replace(/[\u0300-\u036f]/g, "");
  }
  return (
    <>
      <Menu />
      <main className="xl:ml-80 px-12 flex flex-col gap-8 pt-32 xl:pt-12">
        <h1 className="text-2xl font-bold">Lista de compras 1</h1>
        <h2 className="text-xl font-semibold">Selecione em qual categoria quer adicionar itens à lista.</h2>
        <section className="grid sm:grid-cols-3 gap-4 m-auto xl:max-w-[1000px]">
          {categories.map((category) => {
            const categoryFormated = formatCategoryToPath(category.name);
            return (
              <Link
                href={categoryFormated}
                className="flex flex-col justify-center items-center border-primaryColor border-2 h-24 xl:h-32 xl:w-64 w-full rounded-xl cursor-pointer hover:bg-primaryColor hover:text-white"
              >
                <div className="flex items-center gap-2 p-4">
                  <span className="text-base font-bold text-center w-fit">{category.name}</span>
                  <span className="text-xl">{category.icon}</span>
                </div>
              </Link>
            );
          })}
        </section>
        <button className="fixed right-4 bottom-4 bg-green-700 rounded px-8 py-4 text-white cursor-pointer">
          Criar lista
        </button>
      </main>
    </>
  );
}
