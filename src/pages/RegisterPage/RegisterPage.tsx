/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../app/store';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { InputGroup } from '../../components/InputGroup';
import { SubmitButton } from '../../components/SubmitButton';
import { registerUser } from '../../features/auth';
import toast from 'react-hot-toast';

export const RegisterPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });

  const validateForm = () => {
    const errors = {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
    };
    let isValid = true;

    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^[^@\s#\$%\^\*=<>()\[\]\{\}\\|/]+@[^@\s]+\.[^@\s]+$/;
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

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Confirm password';
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    const nameRegex = /^[A-Za-zА-Яа-яЄєІіЇїҐґ'\s-]{3,}$/;

    if (!formData.firstName) {
      errors.firstName = 'First Name is required';
      isValid = false;
    } else if (formData.firstName.length < 3) {
      errors.firstName = 'First Name must contain at least 3 characters';
      isValid = false;
    } else if (!nameRegex.test(formData.firstName)) {
      errors.firstName = "First Name must contain only letters, ', -, space";
      isValid = false;
    }

    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
      isValid = false;
    } else if (formData.lastName.length < 3) {
      errors.lastName = 'Last Name must contain at least 3 characters';
      isValid = false;
    } else if (!nameRegex.test(formData.lastName)) {
      errors.lastName = "Last Name must contain only letters, ', -, space";
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
      await dispatch(registerUser(formData)).unwrap();
      toast.success('Registration successful!');
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (err: any) {
      const message = err || 'Registration error';
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen bg-[url(/src/assets/images/auth-background.png)] bg-cover bg-center">
      <div className="font-family-sans flex justify-center items-center min-h-screen p-4 sm:p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center uppercase">Sign Up</h2>
          <InputGroup
            label="First Name"
            id="firstName"
            type="text"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange}
            error={validationErrors.firstName}
          />
          <InputGroup
            label="Last Name"
            id="lastName"
            type="text"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleChange}
            error={validationErrors.lastName}
          />
          <InputGroup
            label="Email"
            id="email"
            type="email"
            placeholder="example@email.com"
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
          />
          <InputGroup
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={validationErrors.confirmPassword}
            className="mb-8"
          />

          <SubmitButton disabled={isLoading}>{isLoading ? 'Loading...' : 'Sign Up'}</SubmitButton>

          <p className="text-center text-sm sm:text-base leading-4 mt-6 text-black font-normal">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-primary-80 underline hover:text-terracota transition duration-300 ease-in-out focus:text-terracota focus:outline-none"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
