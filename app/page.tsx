'use client';
import { useState, useEffect } from 'react';
import Scoreboard from '@/components/Scoreboard/Scoreboard';
import MoveButton from '@/components/MoveButton/MoveButton';
import ResultModal from '@/components/Result/Result';
import Choosing from '@/components/Choosing/choosing';

type Move = 'Pedra' | 'Papel' | 'Tesoura' | null | 'Choosing';
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
      return 'Vocês Empataram!';
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
    }, 3000);

    return () => clearTimeout(timer);
  }, [playerMove]);
  
  const playAgain = () => {
    setPlayerMove(null);
    setBotMove(null);
    setResult(null);
    setOpen(false);
  };

  return (
    <div className="flex">
      <Scoreboard playerScore={playerScore} botScore={botScore} />
      {!playerMove && (
        <div className="moves-container">
          {moves.map((move) => (
            <MoveButton  key={move} move={move} onClick={setPlayerMove} />
          ))}
        </div>
      )}
      {playerMove && (
        <>
          <Choosing
            playerMove={playerMove}
            botMove={botMove}
            open={open}
          />
          <ResultModal result={result} onPlayAgain={playAgain} />
        </>
      )}
    </div>
  );
}