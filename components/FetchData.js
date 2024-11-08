"use client"
import { useEffect, useState } from 'react';

function FetchData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('/api/getData'); // API'den veri alıyoruz
            const data = await response.json();
            setData(data); // Alınan veriyi state'e kaydediyoruz
        };
        getData(); // Veriyi almak için fonksiyonu çalıştırıyoruz
    }, []);

    return (
        <div>
            <h1>Veriler:</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name} {item.description}</li> // Verileri listeliyoruz
                ))}
            </ul>
        </div>
    );
}

export default FetchData;
