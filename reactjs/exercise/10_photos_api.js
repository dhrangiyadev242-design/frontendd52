import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { data } from 'react-router-dom';
function App() {
    var [photos, setPhotos] = useState([]);

    var apiAddress = "https://jsonplaceholder.typicode.com/photos";
    fetch(apiAddress).then((response) => response.json()).then((data) => {
        setPhotos(data);
    });
    return (
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>albumId</th>
                    <th>title</th>
                    <th>url</th>
                    <th>thumbnailUrl</th>
                </tr>
            </thead>
            <tbody>
                {photos.map((item) =>{
                    return <tr >
                    <td>{item.id}</td>
                    <td>{item.albumId}</td>
                    <td>{item.title}</td>
                    <td>{item.url}</td>
                    <td>{item.thumbnailUrl}</td>
                </tr>
                })}
               
            </tbody>
        </table>

    )

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)