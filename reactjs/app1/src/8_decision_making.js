// import React Module
import React from 'react';
// import virtual DOM
import ReactDOM from 'react-dom/client';
import './clock.css'
// import css file from src (optional)
// always use ./ while importing files from src folder
function digitalClock() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let second = now.getSeconds();
    let ampm = null;

    if (ampm > 12) {
        ampm = "PM"
    }
    else if (ampm < 12) {
        ampm = "AM";
    }
    else {
        ampm = "noon";
    }

    let page = (<div className='container'>
        <div className='clock'>
            <div className='time'>{hour}
                <span className='colon'>:</span>{minutes}<span className='colon'>:</span>{second}<span className='ampm'>{ampm}</span>
            </div>
        </div>

    </div>)
    return page;

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(digitalClock());


