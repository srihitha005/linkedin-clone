import { useState } from 'react';

export default function AuthForm({ type, onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">{type === 'login' ? 'Login' : 'Sign Up'}</h2>
      {type === 'register' && (
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded"
          required
        />
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 w-full mb-3 rounded"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="border p-2 w-full mb-4 rounded"
        required
      />
      <button className="bg-blue-600 text-white py-2 px-4 rounded w-full">
        {type === 'login' ? 'Login' : 'Register'}
      </button>
    </form>
  );
}
