import React from 'react';
import './result.css';

const Result = ({score, playagain}) => {
return(
    <div className="scoreboard">
    <div className="score">you scored {score} / 5.</div>
    <button className="playbtn" onClick={playagain}>Play Again!</button>
</div>
)
}

export default Result;