import React, { useState } from 'react';
import { InputGroup } from '../../components/InputGroup';
import { SubmitButton } from '../../components/SubmitButton';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <InputGroup
          label="Email"
          id="email"
          type="email"
          placeholder="email@gmail.com"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          // error={'Error'}
        />
        <InputGroup
          label="Password"
          id="password"
          type="password"
          placeholder="********"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          // error={'Error'}
        />

        <SubmitButton>Log In</SubmitButton>

        <p className="text-center text-sm mt-4 text-gray-700">
          Don’t have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};
