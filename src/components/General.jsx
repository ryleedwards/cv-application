export default function General({ generalInfo, handleGeneralInputChange }) {
  return (
    <>
      <h3>About You</h3>
      <form className='form form-general'>
        <label>First Name</label>
        <input
          name='firstName'
          type='text'
          className='firstName'
          value={generalInfo.firstName}
          onChange={handleGeneralInputChange}
        />
        <label>Last Name</label>
        <input
          name='lastName'
          type='text'
          className='lastName'
          value={generalInfo.lastName}
          onChange={handleGeneralInputChange}
        />
        <label>Email</label>
        <input
          name='email'
          type='email'
          className='email'
          value={generalInfo.email}
          onChange={handleGeneralInputChange}
        />
        <label>Phone</label>
        <input
          name='phone'
          type='tel'
          className='phone'
          value={generalInfo.phone}
          onChange={handleGeneralInputChange}
        />
      </form>
    </>
  );
}
