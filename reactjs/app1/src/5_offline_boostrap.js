// import React Module
import React from 'react';
// import virtual DOM
import ReactDOM from 'react-dom/client';
// import css file from src (optional)
// always use ./ while importing files from src folder
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

let page = (<div>
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h1>page titel</h1>
                <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque alias repudiandae nam veniam dicta asperiores ratione obcaecati tempora, voluptas reiciendis accusamus quidem. Reiciendis doloremque fugit aspernatur dignissimos quasi delectus.
                </p>
            </div>

        </div>

    </div>
</div>)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(page);


