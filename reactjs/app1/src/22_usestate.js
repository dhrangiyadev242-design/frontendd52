import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
//create function component 

function ScoreBoard()
{
    //create hook 
     var [one,setOne] = useState(0);
     var [two,setTwo] = useState(0);
     var [three,setThree] = useState(0);
     var [four,setFour] = useState(0);
     var [six,setSix] = useState(0);
    return (<div className='container'>
        <div className="row">
            <div className="col-lg-3">
                <div className="card">
                    <div className="card-header text-bg-danger">Virat kohli</div>
                    <div className='card-body'>
                         <button onClick={() => setOne(one + 1 )} className='btn btn-secondary w-100'>1 X {one}</button>
                         <button onClick={() => setTwo(two + 1 )} className='btn btn-warning w-100'>2 X {two}</button>
                        <button onClick={() => setThree(three + 1 )} className='btn btn-info w-100'>3 X {three}</button>
                        <button onClick={() => setFour(four + 1)} className='btn btn-primary w-100'>4 X {four}</button>
                        <button onClick={() => setSix (six + 1 )} className='btn btn-danger w-100'>6 X {six}</button>
                          
                        
                                 
                    </div>
                    <div className="card-footer">
                        Total Run :- {one * 1 + two * 2 + three * 3 + four * 4 + six * 6} 
                         

                    </div>
                </div>
            </div>
        </div>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ScoreBoard />)
// include button for 1,2,3,6s and count how 1,2,3,6 has been score by player also update total accordingly 