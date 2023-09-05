import React, { useReducer, useState } from "react";
import { quizData } from "./data";
import "./App.css";
import { HeaderComponent } from "./Models/HeaderComponent";
import { QuizComponent, QuizProps } from "./Models/QuizProps";
import { Score } from "./Models/Score";
import { checkAnswer } from "./utilis/checkAnswer";
import { initialState, quizReducer } from "./Reducer";



  
  
  
  
  
  
export default function App() {

const [state, dispatch] = useReducer(quizReducer, initialState);
  
const optionClick: QuizProps["optionClickHandler"] = (selectedOption) => {
   dispatch({type: "ATTEMPTED", selectedOption})
     
  };
  
  
  
  return (
    <div className="App">
      <h2>Typescript Day 2</h2>
      <HeaderComponent title={"Quiz App"} />
      <div >
        {state.currentQuestionIndex < state.quizData.length ? ( <QuizComponent quiz={state.quizData[state.currentQuestionIndex]} optionClickHandler={optionClick} />):<Score currentScore={state.score} totalScore={state.quizData.length } onReset={()=>{dispatch({type: "RESET"})}} /> }
         
        </div>
      
    </div>
  );
}
