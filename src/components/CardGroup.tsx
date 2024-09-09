import React, { useState } from 'react';

export interface Card {
  header: string;
  titulo: string;
  conteudo: React.ReactNode;
}

interface CardGroupProps {
  cards: Card[];
}

const CardGroup: React.FC<CardGroupProps> = ({ cards }) => {
  const [cardAtivo, setCardAtivo] = useState<string | null>(cards[0]?.titulo || null);

  const handleClick = (titulo: string) => {
    setCardAtivo(titulo);
  };

  return (
    <div className='my-12'>
      <h1 className="flex justify-center w-full"  >
          PROJETOS
        </h1>
      <div className="flex justify-center w-full" >
        {cards.map((card) => (
          <button
            key={card.titulo}
            onClick={() => handleClick(card.titulo)}
            className={`px-4 py-2 font-mono transition duration-150 ${
              cardAtivo === card.titulo
                ? 'font-bold border-2 border-transparent border-b-indigo-500 text-gray-800'
                : 'bg-none hover:bg-gray-100'
            }`}
          >
            {card.titulo}
          </button>
        ))}
      </div>
      <div className="flex justify-center text-center p-3">
        {cards.map((card) => (
          card.titulo === cardAtivo && (
            <div key={card.titulo} className='lg:w-1/2 '>
                <h1>{card.header}</h1>
                {card.conteudo}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default CardGroup;