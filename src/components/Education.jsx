import { useState } from 'react';
import { educationList } from '../utils/educationList';

export default function Education() {
  const [educationItem, setEducationItem] = useState({
    schoolName: '',
    location: '',
    startDate: '',
    endDate: '',
    degree: '',
    fieldOfStudy: '',
    description: '',
  });

  return (
    <>
      <h3>Education</h3>
      <form>
        <label>School Name</label>
        <input name='schoolName' type='text' />
      </form>
    </>
  );
}
