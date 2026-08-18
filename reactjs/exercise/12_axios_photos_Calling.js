import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
function App() {

    const [photos, setPhotos ]= useState([]);

    // Call API only once when component loads
    useEffect(() => {

        const apiAddress = "https://jsonplaceholder.typicode.com/photos";

        const output = {
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        };

        axios(output)
            .then((response) => {

                setPhotos(response.data);

            })
            .catch((error) => {

                alert("Error in calling API");
                console.log(error);

            });

    }, []);


    // Delete comment
    const deletePhotos = (postId) => {

        alert("Delete button clicked: " + postId);

        const temp = photos.filter((item) => {
            return item.id !== postId;
        });

        setPhotos(temp);
    };


    return (
        <div className="container mt-4">

            <h1>photos</h1>

            <hr />

            <table className="table table-bordered table-striped">

                <thead>
                    <tr>
                    <th>Id</th>
                    <th>AlbumId</th>
                    <th>Title</th>
                    <th>Url</th>
                    <th>ThumbnailUrl</th>
                    <th>Remove</th>
                    </tr>
                </thead>

                <tbody>

                    {photos.map((item) => {

                        return (
                            <tr key={item.id}>
                     <td>{item.id}</td>

                    <td>{item.albumId}</td>

                    <td>{item.title}</td>

                    <td>{item.url}</td>

                    <td>{item.thumbnailUrl}</td>

                 
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-info"
                                        onClick={() => deletePhotos(item.id)}
                                    >
                                       delete
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