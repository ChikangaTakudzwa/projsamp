import React from 'react';
import logo from './logo.svg';
import './App.css';

// Componebts
import QuestionCard from './components/question_card';

const App = () => {

  const startQuiz = async () => {

  }

  const checkAns = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQ = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startQuiz}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
      <QuestionCard />
      <button className="next" onClick={nextQ}>Next Question</button>
    </div>
  );
}

export default App;
