'use client';
interface ScoreboardProps {
  playerScore: number;
  botScore: number;
}

export default function Scoreboard({ playerScore, botScore }: ScoreboardProps) {
  return (
    <div className="flex justify-between w-full max-w-md bg-white shadow-md rounded-xl px-6 py-3">
      <p className="font-semibold text-lg">👤 Você: {playerScore}</p>
      <p className="font-semibold text-lg">🤖 Bot: {botScore}</p>
    </div>
  );
}