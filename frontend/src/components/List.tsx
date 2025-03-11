type typeProps = {
    listName : string
}

export default function List({ listName }: typeProps) {
  return (
    <div className="bg-primaryColor w-96 h-32 rounded flex items-center justify-center">
      <span className="text-white font-bold text-xl">{listName}</span>
    </div>
  );
}
