"use client"

import { useEffect, useState } from 'react';

function FetchData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('/api/getData');
            const data = await response.json();
            setData(data);
        };
        getData();
    }, []);

    return (
        <div>
            <h1 className='text-black underline font-extrabold'>Veriler:</h1>
            <ul className='text-black'>
                {data.map((item) => (
                    <li key={item.id}>{item.name} {item.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default FetchData;