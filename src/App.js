import React from 'react';
import './App.css';
import quizService from "./quizservice/quiz";
import QuestionBox from "./component/QuestionBox";
import Result from "./component/result";

class App extends React.Component{
  state ={
    questionBank : [],
    score : 0,
    responses:0
  };

  getQuestion = () => {
    quizService().then(question => {
      this.setState({
        questionBank : question
      });
    });
  };

  componentDidMount(){
    this.getQuestion();
  }

  computeanswer = (answer, correctanswer) => {
    if(answer === correctanswer){
      this.setState({
        score : this.state.score + 1
      })
    }

    this.setState({
      responses : this.state.responses < 5 ?this.state.responses + 1 : 5
    })
  }

  playagain = () =>{
    this.getQuestion();
    this.setState({
    score : 0,
    responses:0
    })
  }

  render(){
    return (
      <div className="App">
         <h1 className="heading">QUIZBEE</h1>
         {this.state.questionBank.length > 0 &&
          this.state.responses < 5 && 
          this.state.questionBank.map(({question,answer,correct,questionId}) =>(
           <QuestionBox question = {question}
           options = {answer}
           key = {questionId}
           selected = {answer => this.computeanswer(answer, correct)}
           />
         )
         )}
        {this.state.responses === 5 ? (
        <Result score={this.state.score} playagain={this.playagain} />
        ) : null}
      </div>
    )
  }
}

export default App;
