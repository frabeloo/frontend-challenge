'use client';
import { ReactNode } from 'react';

interface MoveButtonProps {
  imageSrc: string;
  label: string;
  onClick: () => void;
}

export default function MoveButton({ imageSrc, label, onClick }: MoveButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-2 bg-primary text-white font-medium py-3 px-6 rounded-xl shadow-md hover:bg-blue-500 transition"
    >
      <img src={imageSrc} alt={label} className="" />
      <span>{label}</span>
    </button>
  );
}
