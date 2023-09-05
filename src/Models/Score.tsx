import React from "react";

interface ScoreProps {
    currentScore: number;
    totalScore: number;
}
export const Score: React.FC<ScoreProps> = ({ currentScore, totalScore }) => {
    return (
        <p>
            Score: {currentScore} / {totalScore}
        </p>
    );
};
