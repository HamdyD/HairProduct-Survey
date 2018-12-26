import React from 'react';
import './SecondPage.css';

const questions =
    [{id:"smooth", label:"SMOOTH"},
     {id:"wavy", label:"WAVY"},
     {id:"curly", label:"CURLY"},
     {id:"very-curly", label:"VERY CURLY"},
     {id:"kinky", label:"KINKY"}]
;

function QuestionList(props) {
    const questions = props.questions;
    const listQuestions = questions.map((question) =>
      
    <button className="hair-list" onClick={() => props.selectAnswer(question.id)} key={question.id}>{question.label}</button>
      
    );

    return listQuestions;    
}

class SecondPage extends React.Component {
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
                  <div className="div-container">

                    <header className="header">
                    <a href="/help-page"><img className="help-img" src="https://a.icons8.com/mfXgpYTm/1Y3xhz/stylist-chat.png" alt="help" /></a>
                    <p className="p-header">So, Serena, how would you<br /> describe the texture of your hair?</p>                
                    </header>
                    
                    <section>
                        
                      <QuestionList questions={questions} selectAnswer={this.selectAnswer} />

                      <div>
                        <a href="/"><img className="arrow" src="https://a.icons8.com/psbinefV/CTVWdu/arrow.png" alt="back"/></a>
                        <p className="page-number">1.2</p>                          
                      </div>
                    </section>                          
                        
                    <footer className="footer">
                      <a className="continue-link" href="/third"><button className="continue-btn" disabled={!this.state.selected}>CONTINUE</button></a>
                    </footer>
                  </div>
        )
    }
}


export default SecondPage;


