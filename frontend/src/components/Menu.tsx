import Link from "next/link";
import Image from "next/image";
import comprasImg from "../assets/img/compras.png";

export default function Menu() {
  return (
    <menu className="bg-secondaryColor text-white xl:h-screen w-full xl:w-80 fixed flex xl:flex-col flex-row gap-8 py-8 xl:px-8">
      <h2 className="font-bold hidden xl:block">Menu</h2>
      <hr />
      <Link href="/mylists" className="font-bold">
        Home
      </Link>
      <Link href="/mylists" className="font-bold">
        Meu perfil
      </Link>
      <Link href="/" className="font-bold absolute top-8 right-8 xl:static">
        Sair
      </Link>
      <Image
        src={comprasImg}
        width={400}
        alt="compras"
        className="hidden xl:block"
      />
    </menu>
  );
}
