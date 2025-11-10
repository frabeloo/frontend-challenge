'use client';
import MoveButton from "../MoveButton/MoveButton";
import './choosing.css';

type Move = 'Pedra' | 'Papel' | 'Tesoura'| null | 'Choosing';

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
    <div className="layout">
        <div className="buttons">
        <MoveButton move={playerMove}/>
        {!open && botMove && (
              <MoveButton move={botMove}/>
        )}
        {open &&(
            <MoveButton move={'Choosing'}/>
        )}
      </div>
      <div className="text">
        {open ? 'MACHINE IS CHOOSING...' : 'MACHINE SELECTED '+ (botMove)?.toUpperCase() }
      </div>

    </div>
  );
}
