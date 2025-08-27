// import React, { useState } from 'react';
// import '../component/Style.css'; // Ensure your form styles are here
// import axios from 'axios';

// const Report = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     type: 'Suggestion',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:4003/reports', form); // Create JSON on port 4002
//       alert('Your report has been submitted!');
//       setForm({ name: '', email: '', type: 'Suggestion', message: '' });
//     } catch (error) {
//       alert('Failed to submit your report.');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Submit a Query or Suggestion</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name *"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email *"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//         <select name="type" value={form.type} onChange={handleChange}>
//           <option value="Suggestion">Suggestion</option>
//           <option value="Issue">Report an Issue</option>
//           <option value="Query">General Query</option>
//         </select>
//         <textarea
//           name="message"
//           placeholder="Write your message here *"
//           value={form.message}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Report;


import React, { useState } from 'react';
import '../component/Style.css';
import axios from 'axios';

const Report = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: 'Suggestion',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/reports', form); // ✅ unified port 4000
      alert('✅ Your report has been submitted!');
      setForm({ name: '', email: '', type: 'Suggestion', message: '' });
    } catch (error) {
      console.error('Report submit error:', error);
      alert('❌ Failed to submit your report.');
    }
  };

  return (
    <div className="form-container">
      <h2>Submit a Query or Suggestion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          value={form.email}
          onChange={handleChange}
          required
        />
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="Suggestion">Suggestion</option>
          <option value="Issue">Report an Issue</option>
          <option value="Query">General Query</option>
        </select>
        <textarea
          name="message"
          placeholder="Write your message here *"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Report;

