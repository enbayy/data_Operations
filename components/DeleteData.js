"use client"
import { useState } from 'react';

function DeleteData() {
  const [id, setId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    const result = await response.json();
    console.log(result); // Backend'den gelen yanıtı konsola yazdırıyoruz
  };

  return (
    <form onSubmit={handleDelete}>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)} // ID inputu
        placeholder="ID"
      />
      <button type="submit">Sil</button>
    </form>
  );
}

export default DeleteData;
