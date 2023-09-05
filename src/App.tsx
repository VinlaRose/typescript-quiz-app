import React, { useState } from "react";
import { quizData } from "./data";
import "./App.css";
import { HeaderComponent } from "./Models/HeaderComponent";
import { QuizComponent, QuizProps } from "./Models/QuizProps";
import { Score } from "./Models/Score";
import { checkAnswer } from "./utilis/checkAnswer";



  
  
  
  
  
  
export default function App() {
    const [score, setScore] = useState<number>(0);
const[currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)


  
const optionClick: QuizProps["optionClickHandler"] = (selectedOption, correctOption) => {
    if (checkAnswer(selectedOption, correctOption)) {
      setScore(score + 1);
    };
    
    if(currentQuestionIndex < quizData.length-1){
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
 
    
    
  };
  
  
  return (
    <div className="App">
      <h2>Typescript Day 2</h2>
      <HeaderComponent title={"Quiz App"} />
      <div >
          <QuizComponent quiz={quizData[currentQuestionIndex]} optionClickHandler={optionClick} />
        </div>
      {/* {quizData.map((item,index) => (
        <div key={index}>
          <QuizComponent quiz={item} optionClickHandler={optionClick} />
        </div>
      ))} */}
      <Score currentScore={score} totalScore={quizData.length } />
    </div>
  );
}
