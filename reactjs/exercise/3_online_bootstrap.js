// import React Module
import React from 'react';
// import virtual DOM
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//create function that returns variable. which has below output. 
//     display Cricket Players using bootstrap framework. 
//     each Player should have name, dob, matches, runs, balls, 100s and 50s 
//     display. 
//         4 Player on extra large screen
//         4 Player on large screen
//         3 Player on medium screen
//         2 Player on small screen
//         1 Player on extra small screen
//     display 11 players.//
function Players() {

  return (
    <div className="container">
      <div className="row">

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 ">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Virat Kohli</h5>
              <p>DOB : 5 NOV 1988</p>
              <p>Matches : 300</p>
              <p>Runs : 14000</p>
              <p>Balls : 16000</p>
              <p>100s : 50</p>
              <p>50s : 75</p>
            </div>
          </div>
        </div>


        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Rohit Sharma</h5>
              <p>DOB : 30 APR 1987</p>
              <p>Matches : 270</p>
              <p>Runs : 11000</p>
              <p>Balls : 12500</p>
              <p>100s : 32</p>
              <p>50s : 57</p>
            </div>
          </div>
        </div>


        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Sachin Tendulkar</h5>
              <p>DOB : 24 APR 1973</p>
              <p>Matches : 463</p>
              <p>Runs : 18426</p>
              <p>Balls : 21000</p>
              <p>100s : 49</p>
              <p>50s : 96</p>
            </div>
          </div>
        </div>


        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Babar Azam</h5>
              <p>DOB : 15 OCT 1994</p>
              <p>Matches : 130</p>
              <p>Runs : 6000</p>
              <p>Balls : 7000</p>
              <p>100s : 19</p>
              <p>50s : 32</p>
            </div>
          </div>
        </div>


        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">MS Dhoni</h5>
              <p>DOB : 7 JUL 1981</p>
              <p>Matches : 350</p>
              <p>Runs : 10773</p>
              <p>Balls : 12300</p>
              <p>100s : 10</p>
              <p>50s : 73</p>
            </div>
          </div>
        </div>


        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">AB de Villiers</h5>
              <p>DOB : 17 FEB 1984</p>
              <p>Matches : 228</p>
              <p>Runs : 9577</p>
              <p>Balls : 10000</p>
              <p>100s : 25</p>
              <p>50s : 53</p>
            </div>
          </div>
        </div>


        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Kumar Sangakkara</h5>
              <p>DOB : 27 OCT 1977</p>
              <p>Matches : 404</p>
              <p>Runs : 14234</p>
              <p>Balls : 16000</p>
              <p>100s : 25</p>
              <p>50s : 93</p>
            </div>
          </div>
        </div>


        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Ricky Ponting</h5>
              <p>DOB : 19 DEC 1974</p>
              <p>Matches : 375</p>
              <p>Runs : 13704</p>
              <p>Balls : 15000</p>
              <p>100s : 30</p>
              <p>50s : 82</p>
            </div>
          </div>
        </div>


        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Jacques Kallis</h5>
              <p>DOB : 16 OCT 1975</p>
              <p>Matches : 328</p>
              <p>Runs : 11579</p>
              <p>Balls : 14000</p>
              <p>100s : 17</p>
              <p>50s : 86</p>
            </div>
          </div>
        </div>


        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">David Warner</h5>
              <p>DOB : 27 OCT 1986</p>
              <p>Matches : 161</p>
              <p>Runs : 6932</p>
              <p>Balls : 7500</p>
              <p>100s : 22</p>
              <p>50s : 33</p>
            </div>
          </div>
        </div>


        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Manish Pandey</h5>
              <p>DOB : 10 SEP 1989</p>
              <p>Matches : 29</p>
              <p>Runs : 566</p>
              <p>Balls : 625</p>
              <p>100s : 1</p>
              <p>50s : 2</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Players />);
