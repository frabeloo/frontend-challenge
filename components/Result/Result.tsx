'use client';
import './Result.css';
interface ResultModalProps {
  result: string | null;
  onPlayAgain: () => void;
}

export default function ResultModal({result, onPlayAgain}: ResultModalProps) {
  if (!result) return null;
  return (
    <div className="layout-result">
        <p className="text-result">{result}</p>
        <button
          onClick={onPlayAgain}
          className="button-result"
        >
          Jogar novamente
        </button>
    </div>
  );
}