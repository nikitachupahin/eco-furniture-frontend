/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { InputGroup } from '../../components/InputGroup';
import { SubmitButton } from '../../components/SubmitButton';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../app/store';
import { loginUser } from '../../features/auth/authSlice';
import toast from 'react-hot-toast';

export const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const validateForm = () => {
    const errors = {
      email: '',
      password: '',
    };
    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      errors.password = 'The password must contain at least 8 characters';
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (validationErrors[name as keyof typeof validationErrors]) {
      setValidationErrors({
        ...validationErrors,
        [name]: '',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await dispatch(loginUser(formData)).unwrap();
      toast.success('Login successful!');
      navigate('/');
    } catch (err: any) {
      const message = err === 'Unauthorized' ? 'Invalid email or password' : err;
      toast.error(message);
    }
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
            value={formData.email}
            onChange={handleChange}
            error={validationErrors.email}
          />
          <InputGroup
            label="Password"
            id="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            error={validationErrors.password}
            className="mb-8"
          />

          <SubmitButton disabled={isLoading}>{isLoading ? 'Logging in...' : 'Login'}</SubmitButton>

          <p className="text-center text-base leading-4 mt-6 text-black font-normal">
            Don’t have an account?{' '}
            <Link
              to="/registration"
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
