'use client';
import { useState } from 'react';
import Scoreboard from '@/components/Scoreboard';
import MoveButton from '@/components/MoveButton';
import ResultModal from '@/components/ResultModal';
import rock from 'p/rock.png';
import paper from 'assets/paper.png';
import scissor from 'assets/scissor.png';

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
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4">
      <h1 className="text-3xl font-bold text-primary">Jokenpô</h1>

      <Scoreboard playerScore={playerScore} botScore={botScore} />

      <div className="flex gap-4 mt-4">
        <MoveButton imageSrc="rock.png" label="Pedra" onClick={() => handlePlay('Pedra')} />
        <MoveButton imageSrc="paper.png" label="Papel" onClick={() => handlePlay('Papel')} />
        <MoveButton imageSrc="scissor.png" label="Tesoura" onClick={() => handlePlay('Tesoura')} />
      </div>

      <ResultModal open={open} result={result} onClose={() => setOpen(false)} />
    </div>
  );
}
