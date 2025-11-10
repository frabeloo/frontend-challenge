'use client';
import MoveButton from "../MoveButton/MoveButton";
type Move = 'Pedra' | 'Papel' | 'Tesoura'| null;

interface AfterChoiceScreenProps {
  playerMove: Move
  botMove: Move;
  open: boolean;
}

export default function AfterChoiceScreen({
  playerMove,
  botMove,
  open,
}: AfterChoiceScreenProps) {
  if (!playerMove) return null;

  return (
    <div className="">
      <div className="">
        <div className="">YOUR CHOICE</div>
        <MoveButton move={playerMove}/>
      </div>

      <div className="">
        {open ? 'MACHINE IS CHOOSING...' : 'MACHINE SELECTED '+ (botMove)?.toUpperCase() }
      </div>

      {botMove && (
        <div className="">
            <MoveButton move={botMove}/>
        </div>
      )}
    </div>
  );
}
