export interface QuizProps {
    quiz: {
        question: string;
        options: string[];
        correctOption?: number;
    };
    optionClickHandler(selectedOption: number, correctOption: number | undefined): void;
}

export const QuizComponent: React.FC<QuizProps> = ({ quiz, optionClickHandler }) => {
    return (
      <div className="QuizComponent">
        <h3 onClick={() => console.log("clicked")}>{quiz.question}</h3>
        <ol>
          {quiz.options.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                console.log("Clicked option:", item);
                optionClickHandler(index, quiz.correctOption); 
              }}
            >
              {item}
            </li>
          ))}
        </ol>
      </div>
    );
  };