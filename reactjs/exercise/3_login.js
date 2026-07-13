// import React Module
import React from 'react';
// import virtual DOM
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//create login form using bootstrap//
function Login() {
  return (

    <div>
      <h2>Login Form</h2>

      <form >
        <label>Email:</label><br />
        <input type='email ' name='email' placeholder='Enter Your Email ' required></input><br /><br />
        <label>Password:</label><br />
        <input type='password ' name='password' placeholder='Enter Your Password ' required></input><br /><br />

        <label>Mobile No:</label><br />
        <input type='tel' name='Mobile' maxlength='10' placeholder='Enter Your Mobile No' required></input><br />

        <input
          type="checkbox"
          name="remember"
          required
        />
        <label>Remember Me</label><br /><br />
        <input type='submit' value='login'></input><br /><br />
        <input type='reset' value='clear'></input>
      </form>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);
