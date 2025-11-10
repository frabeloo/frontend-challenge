'use client';
import "./MoveButton.css";
type Move = 'Pedra' | 'Papel' | 'Tesoura'| null | 'Choosing';

interface MoveButtonProps {
  onClick?: (move:Move) => void;
  move: Move;
}
const moveImages = {
  Pedra: 'rock.png',
  Papel: 'paper.png',
  Tesoura: 'scissor.png',
  Choosing: ''
};
export default function MoveButton({onClick, move }: MoveButtonProps) {
  return (
    <button
      onClick={() => onClick?.(move)}
      className={`move-button ${move ?? ''}`}
    >
      {move && move !== 'Choosing' ? (
      <img src={moveImages[move]} alt={move} className="move-button__img" />
      ): null}
    </button>
  );
}
