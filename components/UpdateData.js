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
    console.log(result);
  };

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <input
        className='text-black border rounded-xl p-1'
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID"
      />
      <input
        className='text-black border rounded-xl p-1'
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        className='text-black border rounded-xl p-1'
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button className='bg-slate-500 font-bold text-black border rounded-xl p-1' type="submit">Güncelle</button>
    </form>
  );
}

export default UpdateData;