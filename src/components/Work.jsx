import { useState } from 'react';

export default function Work({
  workItem,
  handleWorkItemInputChange,
  handleEmploymentSubmitClick,
}) {
  const [isWorkFormVisible, setIsWorkFormVisible] = useState(false);

  const handleAddEmploymentClick = () => {
    setIsWorkFormVisible(true);
  };

  return (
    <>
      <h3>Employment History</h3>

      {isWorkFormVisible ? (
        <form className='form form-work'>
          <label>Job Title</label>
          <input
            name='title'
            type='text'
            value={workItem.title}
            onChange={handleWorkItemInputChange}
          />
          <label>Employer</label>
          <input
            name='employer'
            type='text'
            value={workItem.employer}
            onChange={handleWorkItemInputChange}
          />
          <label>Location</label>
          <input
            name='location'
            type='text'
            value={workItem.location}
            onChange={handleWorkItemInputChange}
          />
          <label>Start Date</label>
          <input
            name='startDate'
            type='date'
            value={workItem.startDate}
            onChange={handleWorkItemInputChange}
          />
          <label>End Date</label>
          <input
            name='endDate'
            type='date'
            value={workItem.endDate}
            onChange={handleWorkItemInputChange}
          />
          <label>Description</label>
          <textarea
            name='description'
            type='text'
            rows={5}
            value={workItem.description}
            onChange={handleWorkItemInputChange}
          />
          <button
            className='btn work-form-submit'
            onClick={handleEmploymentSubmitClick}
          >
            Submit
          </button>
        </form>
      ) : (
        <button
          className='btn btn-add-employment'
          onClick={handleAddEmploymentClick}
        >
          Add Employment
        </button>
      )}
    </>
  );
}
