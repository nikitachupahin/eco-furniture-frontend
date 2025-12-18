import { useState } from 'react';
import toast from 'react-hot-toast';
import { InputGroup } from '../../components/InputGroup';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
    let isValid = true;

    const nameRegex = /^[A-Za-zА-Яа-яЄєІіЇїҐґ'\s-]{3,}$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must contain at least 3 characters';
      isValid = false;
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "Name must contain only letters, ', -, space";
      isValid = false;
    }
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^[^@\s#\$%\^\*=<>()\[\]\{\}\\|/]+@[^@\s]+\.[^@\s]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    toast.success('Form submitted!');

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="py-16 lg:py-25">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="text-center mb-10 lg:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black uppercase mb-3">
            GET IN TOUCH WITH US
          </h2>
          <p className="text-primary-100 text-xl max-w-xl mx-auto">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
            Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-3xl mx-auto">
          <div className="space-y-8 flex flex-wrap lg:block order-2 lg:order-1">
            <div className="flex gap-4">
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">ADDRESS</h3>
                <p className="text-xl font-normal text-primary-100">
                  Khreshatyk sr. 104.
                  <br />
                  310202, Kyiv
                  <br />
                  Ukraine
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">PHONE</h3>
                <p className="text-xl font-normal text-primary-100">
                  Mobile: +(078) 234-2788
                  <br />
                  Hotline: +(078) 234-2788
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">WORKING TIME</h3>
                <p className="text-xl font-normal text-primary-100">
                  Monday-Friday:
                  <br />
                  9:00 - 22:00
                  <br />
                  Saturday-Sunday:
                  <br />
                  9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="order-1 lg:order-2">
            <InputGroup
              label="Your name"
              id="name"
              type="text"
              placeholder="John Smith"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              className={'mb-8'}
            />

            <InputGroup
              label="Email address"
              id="email"
              type="email"
              placeholder="johnsmith@gmail.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              className={'mb-8'}
            />

            <InputGroup
              label="Subject"
              id="subject"
              type="text"
              placeholder="Write the subject"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
              className={'mb-8'}
            />

            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-gray-700 text-base font-bold mb-2 leading-4"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 border rounded-lg placeholder-primary-80 text-gray-700 focus:border-transparent focus:outline-terracota outline-2 outline-transparent hover:outline-terracota hover:border-transparent transition duration-300 ease-in-out resize-none ${
                  errors.message ? 'border-red-500' : 'border-primary-50'
                }`}
                placeholder="Hello! I'd like to say..."
              />
              {errors.message && (
                <p className="text-red-500 text-xs italic mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full
            bg-terracota hover:bg-black text-white leading-4 font-semibold py-4 rounded-[50px] 
            transition duration-300 ease-in-out uppercase
            focus:outline-black focus:shadow-outline flex items-start justify-center gap-2
            "
            >
              <span className="text-sm md:text-base uppercase leading-7">SUBMIT</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
