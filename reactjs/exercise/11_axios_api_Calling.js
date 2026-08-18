import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
function App() {

    const [comments, setComments] = useState([]);

    // Call API only once when component loads
    useEffect(() => {

        const apiAddress = "https://jsonplaceholder.typicode.com/comments";

        const callings = {
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        };

        axios(callings)
            .then((response) => {

                setComments(response.data);

            })
            .catch((error) => {

                alert("Error in calling API");
                console.log(error);

            });

    }, []);


    // Delete comment
    const deleteComments = (postId) => {

        alert("Delete button clicked: " + postId);

        const temp = comments.filter((item) => {
            return item.id !== postId;
        });

        setComments(temp);
    };


    return (
        <div className="container mt-4">

            <h1>Comments</h1>

            <hr />

            <table className="table table-bordered table-striped">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Post ID</th>
                        <th>Name</th>
                        <th>Body</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {comments.map((item) => {

                        return (
                            <tr key={item.id}>

                                <td>{item.id}</td>

                                <td>{item.postId}</td>

                                <td>{item.name}</td>

                                <td>{item.body}</td>

                                <td>{item.email}</td>

                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => deleteComments(item.id)}
                                    >
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        );

                    })}

                </tbody>

            </table>

        </div>
    );
}


const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(<App />);