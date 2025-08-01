
import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    captchaa: '',
  });

  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptcha({ num1, num2 });
  };

  const validateForm = () => {
    const name1 = /^[A-Za-z ]+$/;
    const email1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobile1 = /^\d{10}$/;
    const message1 = /^[^<>:{}]*$/;

    if (!name1.test(formData.name)) return 'Name must contain only letters and spaces.';
    if (!email1.test(formData.email)) return 'Enter a valid email address.';
    if (!mobile1.test(formData.mobile)) return 'Mobile number must be 10 digits.';
    if (!message1.test(formData.message)) return 'Message must not contain < > { } characters.';
    const correctAnswer = captcha.num1 + captcha.num2;
    if (parseInt(formData.captchaa) !== correctAnswer) return 'Incorrect CAPTCHA answer.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSuccess('');
    } else {
      setError('');
      setSuccess('Thank you for contact us!');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: '',
        captchaa: '',
      });
      generateCaptcha(); 
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
   
    <section className="min-h-screen bg-blue-100 p-8 flex justify-center items-center">
       
      <form
        onSubmit={handleSubmit}
        className="bg-indigo-300 p-10 rounded-lg   space-y-6 border-blue-950 border-2"
      >
        
<h2 className="text-2xl font-bold text-blue-700 text-center">Contact Us</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded resize-none"
        />

        <div className="flex items-center gap-2">
          <label>
            What is {captcha.num1} + {captcha.num2}?
          </label>
          <input
            type="text"
            name="captchaa"
            placeholder="Answer"
            value={formData.captchaa}
            onChange={handleChange}
            className="p-1 border rounded w-16 text-center"
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}

        <button
          type="submit"
          className="w-full  bg-indigo-700 text-white py-2 rounded hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
