type typeProps = {
    listName : string
}

export default function List({ listName }: typeProps) {
  return (
    <div className="bg-primaryColor w-full xl:w-[350px] h-32 rounded flex items-center justify-center">
      <span className="text-white font-bold text-2xl">{listName}</span>
    </div>
  );
}
