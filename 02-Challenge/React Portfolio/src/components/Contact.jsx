import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !validateEmail(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      {errors.name && <p>{errors.name}</p>}
      
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      {errors.email && <p>{errors.email}</p>}
      
      <textarea placeholder="Message" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
      {errors.message && <p>{errors.message}</p>}
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
