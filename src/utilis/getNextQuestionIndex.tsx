export function getNextQuestionIndex(
    currentIndex: number,
    totalQuestions: number
): number {
    return currentIndex + 1 <= totalQuestions ? currentIndex + 1 : currentIndex;
}
