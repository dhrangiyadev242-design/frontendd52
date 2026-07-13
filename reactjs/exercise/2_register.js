// import React Module
import React from 'react';
// import virtual DOM
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Register() {
  return (

    <div>
      <h2>Register Form</h2>
      <label>Frist Name:</label><br />
      <input type='text' name='Fname' placeholder='Enter Your Frist Name' required></input><br />

      <label>Last Name:</label><br />
      <input type='text' name='Lname' placeholder='Enter Your Last Name'></input><br />

      <label>Email:</label><br />
      <input type='Email' name='Email' placeholder='Enter Your Email' required></input><br />

      <lable> Password:</lable><br />
      <input type='Password' name='Password' placeholder='Enter Your Password' required></input><br />

      <label>Mobile No:</label><br />
      <input type='tel' name='Mobile' maxlength='10' placeholder='Enter Your Mobile No' required></input><br />

      <label>gender:</label><br />
      <label  >
        <input type="radio" name="gender" value="male" />
        Male
      </label>
      <label>
        <input type="radio" name="gender" value="female" />
        feMale
      </label>
      <label>
        <input type="radio" name="gender" value="other" />
        other
      </label><br />

      <label>Date of Barth:</label><br />
      <input type='date' name='dob' required></input><br />
      <label>city:</label><br />
      <select name='city' >
        <option>select your city </option>
        <option>Rajkot</option>
        <option>Ahmedabad</option>
        <option>Surat</option>
        <option>Baroda</option><br />
      </select><br />

      <label>Address:</label><br />
      <textarea name='address' rows={4} cols={30} placeholder='Enter Your Adress'>
      </textarea><br />
      <input
        type="checkbox"
        id="terms"
        required
      />
      <label htmlFor="terms">
        I Agree to Terms and Conditions
      </label><br />
      <input type='submit' value='register'></input><br /><br />
      <input type='reset' value='reset'></input>

    </div>



  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Register />);
