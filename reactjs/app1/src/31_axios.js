import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
function App() {
    var [posts, setPosts] = useState([]);
    var [isFetched, setIsFetch] = useState(false);

    useEffect(() => {
        if (isFetched === false) {
            var apiAddress = "https://jsonplaceholder.typicode.com/posts";
            //axios
            var options = {
                url:apiAddress,
                method:'get',
                responseType:'json'
            };
            
            //call api 
            axios(options).then((response) =>{
                //promise(function) that will execute conditionally (only if server returns data)
                // response object has all the data in data property returns from server
                setPosts(response.data);

            }).catch((error) => {
                 //promise(function) that will execute conditionally (only if server is error )
                 alert("error in calling api");
            })
        }

    });
    //inner function
    let deletePost = function (postID) {
        //this function runs when user click on delete button
        alert("delete button clicked." + postID);
        //now findout postID in posts and remove it from state array
        let temp = posts.filter((item) => {
            if (item.id != postID)
                return item;
        });
        setPosts(temp);
    }
    return (<div className="container">
        <div className="row">
            <div className="col-12">
                <h1>Posts</h1>
                <hr />
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>UserID</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((item) => {
                            return (<tr key={item.id}>
                                <td >{item.id}</td>
                                <td >{item.userId}</td>
                                <td >{item.title}</td>
                                <td >{item.body}</td>
                                <td >
                                    <button type='button' className='btn btn-danger' onClick={() => deletePost(item.id)}>Delete</button>
                                </td>
                            </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)