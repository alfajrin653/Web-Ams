import { useState } from 'react';
import axios from 'axios';
import ContactInfo from '../Layout/Contact'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await axios.post('http://localhost:5000/contact', formData);
      setStatus(response.data.message);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message.');
    }
  };

  return (
    <div id='contact' className='flex flex-col justify-center items-center md:flex-row pt-50 pb-20'>

    <div  className="max-w-xl mx-auto p-4 ">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full p-2 border rounded" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-2 border rounded" />
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="w-full p-2 border rounded" />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" required className="w-full p-2 border rounded h-32" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send</button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
      <ContactInfo/>
    </div>
  );
};

export default ContactForm;
