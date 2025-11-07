'use client';
interface ResultModalProps {
  open: boolean;
  result: string;
  onClose: () => void;
}

export default function ResultModal({ open, result, onClose }: ResultModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 text-center shadow-lg w-80 animate-fadeIn">
        <h2 className="text-2xl font-bold mb-3">Resultado</h2>
        <p className="mb-5">{result}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          Jogar novamente
        </button>
      </div>
    </div>
  );
}