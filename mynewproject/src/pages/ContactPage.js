// import React, { useState } from 'react';
// import axios from 'axios';
// import '../component/Style.css'; // Ensure styling is applied

// const ContactPage = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:4004/messages', form);
//       setSubmitted(true);
//       setForm({ name: '', email: '', subject: '', message: '' });
//     } catch (error) {
//       alert('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Contact Us</h2>
//       <p style={{ marginBottom: '20px' }}>
//         Have a question or suggestion? Fill out the form and we’ll get back to you shortly.
//       </p>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name <span className="required-star">*</span>
//         </label>
//         <input type="text" name="name" value={form.name} onChange={handleChange} required />

//         <label>
//           Email <span className="required-star">*</span>
//         </label>
//         <input type="email" name="email" value={form.email} onChange={handleChange} required />

//         <label>
//           Subject <span className="required-star">*</span>
//         </label>
//         <input type="text" name="subject" value={form.subject} onChange={handleChange} required />

//         <label>
//           Message <span className="required-star">*</span>
//         </label>
//         <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />

//         <button type="submit">Send Message</button>
//       </form>

//       {submitted && <p className="success-msg">✅ Your message has been sent successfully!</p>}
//     </div>
//   );
// };

// export default ContactPage;
import React, { useState } from 'react';
import axios from 'axios';
import '../component/Style.css'; // Ensure styling is applied

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // To handle button state
  const [error, setError] = useState(''); // For showing errors

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await axios.post('http://localhost:4000/messages', form);
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('❌ Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <p style={{ marginBottom: '20px' }}>
        Have a question or suggestion? Fill out the form and we’ll get back to you shortly.
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          Name <span className="required-star">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>
          Email <span className="required-star">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>
          Subject <span className="required-star">*</span>
        </label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <label>
          Message <span className="required-star">*</span>
        </label>
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {submitted && <p className="success-msg">✅ Your message has been sent successfully!</p>}
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
};

export default ContactPage;

