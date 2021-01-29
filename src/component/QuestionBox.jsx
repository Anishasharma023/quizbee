import React, {useState} from 'react';
import './QuestionBox.css';

const QuestionBox = ({question, options, selected}) => {
    const [answer, SetAnswer] = useState(options);
return(
    <div className="questionBox">
        <div className="question">{question}</div>
        <div>&nbsp;</div>
        {answer.map((text, index) =>(
            <button key={index} className="answerbtn" onClick={ () => {
                SetAnswer([text]);
                selected(text);
            }}>
                {text}
            </button>
        )
        )}
    </div>
)
}

export default QuestionBox;