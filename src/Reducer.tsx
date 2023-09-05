import { getNextQuestionIndex } from "./utilis/getNextQuestionIndex"
import { checkAnswer } from "./utilis/checkAnswer"
import { quizData } from "./data"


type AttemptedAction = {
    type: "ATTEMPTED",
    selectedOption : number
  }
  
  type ResetAction = {
    type: "RESET"
  }
  
  type QuizAction = AttemptedAction | ResetAction
  
  //type for state of our app ===>
  export type AppState = {
    quizData: {
      question: string
      options: string[]
      correctOption: number
    }[]
    currentQuestionIndex: number
    score: number
  }
  
  export const initialState : AppState = {
    quizData: quizData,
      currentQuestionIndex: 0,
      score: 0
  }
  


export const quizReducer = (state: AppState, action: QuizAction): AppState => {
  switch (action.type) {
    case 'ATTEMPTED':
      const nextQuestionIndex = getNextQuestionIndex(
        state.currentQuestionIndex,
        state.quizData.length,
      )
      const updatedScore = checkAnswer(
        action.selectedOption,
        state.quizData[state.currentQuestionIndex].correctOption,
      )
        ? state.score + 1
        : state.score

      return {
        ...state,
        currentQuestionIndex: nextQuestionIndex,
        score: updatedScore,
      }
      
      case 'RESET':
        return{
            ...state,
            currentQuestionIndex: 0,
            score: 0
        }

    // other cases...
    default:
      return state
  }
}

