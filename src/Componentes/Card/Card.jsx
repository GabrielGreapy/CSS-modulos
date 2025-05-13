import style from './Card.css'

function Card() {
    
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="image.jpg" alt="Imagem do Card" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Título</div>
                <p className="text-gray-700 text-base">
                    Descrição do conteúdo do card.
                </p>
            </div>
            <br />
            <img src="" alt="" />
            <div className="">
                <div className="">
                    <p></p>
                </div>
            </div>
            <br />
            <img src="" alt="" />
            <div className="">
                <div className="">
                    <p></p>
                </div>
            </div>
        </div>

    );
}

export default Card;