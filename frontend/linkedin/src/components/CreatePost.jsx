import { useState } from 'react';

export default function CreatePost({ onSubmit }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a post..."
        className="w-full border p-2 rounded mb-2"
      ></textarea>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Post</button>
    </form>
  );
}
