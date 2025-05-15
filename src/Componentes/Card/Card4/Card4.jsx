function Card() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 border mx-auto">
      <h2 className="text-xl font-bold">Título do Card</h2>
      <p className="text-gray-700">Essa é a descrição do card.</p>
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Clique aqui</button>
    </div>
  );
}

export default Card;
