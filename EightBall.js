import React, { useState } from 'react';
import './EightBall.css';
import defaultMessages from "./answers.json";

function pickRandom(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function EightBall({ messages = defaultMessages }) {
    const [message, setMessage] = useState({
        msg: "Think of a Question.",
        color: "black",
    });

    function handleClick(evt) {
        setMessage(pickRandom(messages));
    }

    return (
        <div
            className="EightBall"
            onClick={handleClick}
            style={{ backgroundColor: message.color }}
        >
          <b>{message.msg}</b>
        </div>
    );
}

export default EightBall;
