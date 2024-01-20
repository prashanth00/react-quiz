import React from "react";
import Options from "./Options";
import { useQuiz } from "../context/QuizContext";

export default function Question() {
  const { questions, index } = useQuiz();
  console.log(questions);
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options question={questions[index]} />
    </div>
  );
}
