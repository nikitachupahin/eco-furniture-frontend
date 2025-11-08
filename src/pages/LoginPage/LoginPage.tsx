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
    <div className="h-screen bg-[url(/src/assets/images/auth-background.png)] bg-cover bg-center">
      <div className="font-family-sans flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center uppercase">Sign In</h2>
          <InputGroup
            label="Email"
            id="email"
            type="email"
            placeholder="Email@gmail.com"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            // error={'Error'}
          />
          <InputGroup
            label="Password"
            id="password"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            className="mb-8"
            // error={'Error'}
          />

          <SubmitButton>Login</SubmitButton>

          <p className="text-center text-base leading-4 mt-6 text-black font-normal">
            Don’t have an account?{' '}
            <Link
              to="/register"
              className="text-primary-80 underline hover:text-terracota transition duration-300 ease-in-out focus:text-terracota focus:outline-none"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
