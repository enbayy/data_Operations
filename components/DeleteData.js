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
    console.log(result);
  };

  return (
    <form className='flex flex-col gap-2' onSubmit={handleDelete}>
      <input
        className='text-black border rounded-xl p-1'
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className='bg-slate-500 font-bold text-black border rounded-xl p-1' type="submit">Sil</button>
    </form>
  );
}

export default DeleteData;