/**
 * class Trivia
 *  1- display questions
 *  2- collect answers
 *  3- display result
 * 
 * class Question
 *  1- data
 *  2- filter
 *  3- getQuestionByType
 * 
 */

import '../css/bootstrap.min.css';
import '../css/style.css';

import QuestionSelect from './QuestionSelect';
import NavBar from './NavBar';
import Trivia from './Trivia';
import Questions from "./Questions";

const _qs = QuestionSelect ();
const _navBar = NavBar();
const questionsCls = new Questions();
const trivia = new Trivia({
  questions: questionsCls.questions,
  questionsContainer: document.querySelector("#questionsContainer"),
  resultContainer: document.querySelector("#result")
});

const sumbitEl = document.querySelector("#submit");
const startEl = document.querySelector("#start");

startEl.addEventListener('click', (event) => {
    trivia.init();
    event.target.classList.add('hide');
    sumbitEl.classList.remove("hide");
})

sumbitEl.addEventListener("click", (event) => {
    trivia.collectUserAnswers();
    event.target.classList.add('hide');
    startEl.classList.remove("hide");


});

