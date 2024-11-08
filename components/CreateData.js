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
    console.log(result);
  };

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
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
      <button className='bg-slate-500 font-bold text-black border rounded-xl p-1' type="submit">Gönder</button>
    </form>
  );
}

export default CreateData;