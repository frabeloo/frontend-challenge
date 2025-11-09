'use client';
import { useState, useEffect } from 'react';
import Scoreboard from '@/components/Scoreboard/Scoreboard';
import MoveButton from '@/components/MoveButton/MoveButton';
import ResultModal from '@/components/Result/Result';

type Move = 'Pedra' | 'Papel' | 'Tesoura' | null;
const moves: Move[] = ['Pedra', 'Papel', 'Tesoura'];

export default function HomePage() {
  const [playerScore, setPlayerScore] = useState(0);
  const [botScore, setBotScore] = useState(0);
  const [playerMove, setPlayerMove] = useState<Move>(null);
  const [botMove, setBotMove] = useState<Move>(null);
  const [result, setResult] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handlePlay = (playerMove: Move, botMove: Move): string => {
    if (playerMove === botMove) {
      return 'Empate!';
    }
    if (
      (playerMove === 'Pedra' && botMove === 'Tesoura') ||
      (playerMove === 'Tesoura' && botMove === 'Papel') ||
      (playerMove === 'Papel' && botMove === 'Pedra')
    ) {
      return 'Você venceu!';
    }
    return 'Você perdeu!';
  };

  useEffect(() => {
    if (playerMove === null) return;
    setOpen(true);
    setBotMove(null);
    setResult(null);

    const timer = setTimeout(() => {
      const randomChoice = moves[Math.floor(Math.random() * moves.length)];
      setBotMove(randomChoice);
      const outcome = handlePlay(playerMove, randomChoice);
      setResult(outcome);
      if (outcome === 'Você venceu!') {
        setPlayerScore((s) => s + 1);
      } else if (outcome === 'Você perdeu!') {
        setBotScore((s) => s + 1);
      }
      setOpen(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [playerMove]);

  return (
    <div className="flex">
      <Scoreboard playerScore={playerScore} botScore={botScore} />

      <div className="moves-container">
        <MoveButton imageSrc="rock.png" color="green" label="Pedra" onClick={() => setPlayerMove('Pedra')} />
        <MoveButton imageSrc="paper.png" color="yellow" label="Papel" onClick={() => setPlayerMove('Papel')} />
        <MoveButton imageSrc="scissor.png" color="blue" label="Tesoura" onClick={() => setPlayerMove('Tesoura')} />
      </div>
      <ResultModal open={open} result={result} onClose={() => setOpen(false)} />
    </div>
  );
}