'use client';
import "./Scoreboard.css";

interface ScoreboardProps {
  playerScore: number;
  botScore: number;
}

export default function Scoreboard({ playerScore, botScore }: ScoreboardProps) {
  return (
    <div className="bg-white flex-center box">
      <h2 className="">SCORE</h2>
      <p className="font-semibold text-lg">👤 Você: {playerScore}</p>
      <p className="font-semibold text-lg">🤖 Bot: {botScore}</p>
    </div>
  );
}