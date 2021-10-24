import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function DateTime() {
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        setDate(new Date())
    },[]);
    return (
        <div className="box">
            <p className="item"> Date : {date.toLocaleDateString()}</p>
        </div>
    );
}
