import React from 'react';
import './ThirdPage.css';

const questions =
    [{id:"short", label:"SHORT"},
     {id:"very-short", label:"VERY SHORT"},
     {id:"chin-length", label:"CHIN LENGTH"},
     {id:"shoulder-length", label:"SHOULDER LENGTH"},
     {id:"long", label:"LONG"}]
;

function QuestionList(props) {
    const questions = props.questions;
    const listQuestions = questions.map((question) =>
      
    <button className="hair-list" onClick={() => props.selectAnswer(question.id)} key={question.id}>{question.label}</button>
      
    );

    return listQuestions;    
}

class ThirdPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
        };

        this.selectAnswer = this.selectAnswer.bind(this);

    }

        selectAnswer(id) {
            this.setState({
                selected: id,
            });
        }
        
        
    render() {   
        
        return (
            <div  className="div-container">

                <header className="header">                  
                  <p className="p-header">Now, how long are your<br /> hair right now?</p>                
                </header>
                
                  <section>
                      
                  <QuestionList questions={questions} selectAnswer={this.selectAnswer} />

                      <div>
                        <a href="/second"><img className="arrow" src="https://a.icons8.com/psbinefV/CTVWdu/arrow.png" alt="back"/></a>
                        <p className="page-number">2.2</p>  
                      </div>
                  </section>

                <footer className="footer">
                  <a className="continue-link" href="/"><button className="continue-btn" disabled={!this.state.selected}>FINISH</button></a>
                </footer>
            </div>
        )
    }

}

export default ThirdPage; 