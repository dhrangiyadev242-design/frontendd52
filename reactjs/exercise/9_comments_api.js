import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { data } from 'react-router-dom';
function App() {
    var [commments,setComments] = useState([]);
    var apiAddress = "https://jsonplaceholder.typicode.com/comments";
      fetch(apiAddress).then((response) => response.json()).then((data) => {
            //store state array
            setComments(data);
        }); 
  return(  <table className="table table-bordered table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>postID</th>
                <th>Name</th>
                <th>Body</th>
                <th>Email</th>
                <th>
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {commments.map((item) =>{
                return  <tr>
                <td>{item.id}</td>
                <td>{item.postId}</td>
                <td>{item.name}</td>
                <td>{item.body}</td>
                <td>{item.email}</td>
                <td>
                    <button type='button' className='btn btn-primary'>delete</button>
                </td>
            </tr>
            })}       
        </tbody>
    </table>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)