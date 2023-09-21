import { useState } from 'react';

export default function General() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const changedInput = e.target.name;
    setState((previousState) => {
      return { ...previousState, [changedInput]: e.target.value };
    });
  };

  return (
    <>
      <h3>About You</h3>
      <form className='form form-general'>
        <label>First Name</label>
        <input
          name='firstName'
          type='text'
          className='firstName'
          value={state.firstName}
          onChange={handleInputChange}
        />
        <label>Last Name</label>
        <input
          name='lastName'
          type='text'
          className='lastName'
          value={state.lastName}
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input
          name='email'
          type='email'
          className='email'
          value={state.email}
          onChange={handleInputChange}
        />
        <label>Phone</label>
        <input
          name='phone'
          type='tel'
          className='phone'
          value={state.phone}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
}
