import Link from "next/link";

export default function MyLists() {
  return (
    <>
      <menu className="bg-primaryColor text-white h-screen w-96">
        <h2>Menu</h2>
        <Link href="/mylists">Home</Link>
      </menu>
    </>
  );
}
