"use client"

import { useState } from 'react';

function CreateData() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newData = { name, description };

    const response = await fetch('/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    const result = await response.json();
    console.log(result); // Backend'den gelen yanıtı konsola yazdırıyoruz
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Name inputu
        placeholder="Name"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)} // Description inputu
        placeholder="Description"
      />
      <button type="submit">Gönder</button>
    </form>
  );
}

export default CreateData;
