'use client';
import { useState } from 'react';
import Scoreboard from '@/components/Scoreboard/Scoreboard';
import MoveButton from '@/components/MoveButton/MoveButton';
import ResultModal from '@/components/Result/Result';

type Move = 'Pedra' | 'Papel' | 'Tesoura';

export default function HomePage() {
  const [playerScore, setPlayerScore] = useState(0);
  const [botScore, setBotScore] = useState(0);
  const [result, setResult] = useState('');
  const [open, setOpen] = useState(false);

  const moves: Move[] = ['Pedra', 'Papel', 'Tesoura'];

  const handlePlay = (playerMove: Move) => {
    const botMove = moves[Math.floor(Math.random() * moves.length)];
    let outcome = '';

    if (playerMove === botMove) {
      outcome = 'Empate!';
    } else if (
      (playerMove === 'Pedra' && botMove === 'Tesoura') ||
      (playerMove === 'Tesoura' && botMove === 'Papel') ||
      (playerMove === 'Papel' && botMove === 'Pedra')
    ) {
      outcome = 'Você venceu!';
      setPlayerScore((p) => p + 1);
    } else {
      outcome = 'Você perdeu!';
      setBotScore((p) => p + 1);
    }

    setResult(`${outcome} (Você: ${playerMove} | Bot: ${botMove})`);
    setOpen(true);
  };

  return (
    <div className="flex">

      <Scoreboard playerScore={playerScore} botScore={botScore} />

      <div className="moves-container">
        <MoveButton imageSrc="rock.png" color='green' label="Pedra" onClick={() => handlePlay('Pedra')} />
        <MoveButton imageSrc="paper.png" color='yellow' label="Papel" onClick={() => handlePlay('Papel')} />
        <MoveButton imageSrc="scissor.png" color='blue' label="Tesoura" onClick={() => handlePlay('Tesoura')} />
      </div>

      <ResultModal open={open} result={result} onClose={() => setOpen(false)} />
    </div>
  );
}
