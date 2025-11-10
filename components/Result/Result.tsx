'use client';
interface ResultModalProps {
  result: string | null;
  onPlayAgain: () => void;
}

export default function ResultModal({result, onPlayAgain}: ResultModalProps) {
  if (!result) return null;
  return (
    <div className="">
      <div className="">
        <h2 className="">Resultado</h2>
        <p className="">{result}</p>
        <button
          onClick={onPlayAgain}
          className=""
        >
          Jogar novamente
        </button>
      </div>
    </div>
  );
}