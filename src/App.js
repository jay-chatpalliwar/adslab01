// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [formData, setFormData] = useState({ name: '', email: '' ,password: '',mobileno: ''});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       console.log(formData);
//       await axios.post('http://localhost:5000/create', formData);
//       alert('User created successfully!');
//     } catch (error) {
//       console.error('Error creating user:', error);
//     }
//   };

//   return (
//     <div className='h-screen w-screen p-14 border'>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input type="text" name="name" onChange={handleChange} required />

//         <label>Email:</label>
//         <input type="text" name="email" onChange={handleChange} required />

//         <label>Password:</label>
//         <input type="text" name="password" onChange={handleChange} required />

//         <label>Mobile Number:</label>
//         <input type="text" name="mobileno" onChange={handleChange} required />

//         <button type="submit">Create User</button>
//       </form>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', mobileno: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      await axios.post('http://localhost:5000/create', formData);
      alert('User created successfully!');
      setFormData({ name: '', email: '', password: '', mobileno: '' }); // Clear the form
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl mb-6 font-extrabold text-center text-gray-900">Create User</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="mobileno">
              Mobile Number :
            </label>
            <input
              type="tel"
              id="mobileno"
              name="mobileno"
              onChange={handleChange}
              value={formData.mobileno}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;


