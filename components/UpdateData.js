"use client"
import { useState } from 'react';

function UpdateData() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = { id, name, description };

    const response = await fetch('/api/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    const result = await response.json();
    console.log(result); // Backend'den gelen yanıtı konsola yazdırıyoruz
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)} // ID inputu
        placeholder="ID"
      />
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
      <button type="submit">Güncelle</button>
    </form>
  );
}

export default UpdateData;
