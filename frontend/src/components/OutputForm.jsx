import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Outputform.css'

export default function OutputForm() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/output')
            .then((res) => setdata(res.data))
            .catch((err) => console.log(err));
    }, [data]);

    const clickHandler = (event)=>{
        axios
        .post("http://localhost:8000/api/delete", {_id : event.target.value})
        .then()
        .catch((err)=>console.log(err));
        // window.location.reload(true);
    }

    return (
        <div className="box">
            {data.map((todos) => (
                <div key={todos._id} className="item">
                <input type="checkbox" className="deletebtn" value={todos._id} onClick={clickHandler}></input>
                {todos.task}
                </div>
            ))}
        </div>
    );
}
