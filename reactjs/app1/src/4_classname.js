// import React Module
import React from 'react';
// import virtual DOM
import ReactDOM from 'react-dom/client';
// import css file from src (optional)
// always use ./ while importing files from src folder
import './index.css';
let num1 = 10;
let num2 = 3;
let output = (<div>
    <h1 className='heading'>Javascript expression (statement)</h1>
    <ul>
        <li className='list-item'>num1 ={num1} num2 = {num2}</li>
        <li className='list-item'>addition {num1 + num2}</li>
        <li className='list-item'>subtraction {num1 - num2}</li>
        <li className='list-item'>multiplication {num1 * num2}</li>
        <li className='list-item'>division {num1 / num2}</li>
    </ul>
</div>)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(output);


