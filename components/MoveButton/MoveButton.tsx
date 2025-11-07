'use client';
import "./MoveButton.css";

interface MoveButtonProps {
  imageSrc: string;
  label: string;
  color: string;
  onClick: () => void;
}

export default function MoveButton({ color,imageSrc, label, onClick }: MoveButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`move-button ${color}`}
    >
      <img src={imageSrc} alt={label} className="move-button__img" />
    </button>
  );
}
