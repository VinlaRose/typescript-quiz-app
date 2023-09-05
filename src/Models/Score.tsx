import React from "react";

interface ScoreProps {
    currentScore: number;
    totalScore: number;
    onReset: () => void
}
export const Score: React.FC<ScoreProps> = ({ currentScore, totalScore,onReset }) => {
    return (
        <p>
            Score: {currentScore} / {totalScore}
            <button onClick={onReset}>Reset Quiz</button>
        </p>
    );
};
