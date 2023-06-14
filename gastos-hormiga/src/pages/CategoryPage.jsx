import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo-horizontal.png";
import { Question } from "../components/Question";
import { questions } from "../data";
import { Link } from "react-router-dom";

const shuffleArray = (array) => {
  return array;
};

export const CategoryPage = () => {
  // Regresa arreglo
  const [questionsFiltered, setQuestionsFiltered] = useState(questions);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(true);

  useEffect(() => {
    return () => {
      const newQuestions = shuffleArray(questionsFiltered);
      setQuestionsFiltered(newQuestions);
    };
  }, []);

  return (
    <div>
      <Question
        filteredQuestion={questionsFiltered[indexQuestion]}
        setIndexQuestion={setIndexQuestion}
        indexQuestion={indexQuestion}
        questionsFiltered={questionsFiltered}
        setActiveQuiz={setActiveQuiz}
      />
    </div>
  );
};
