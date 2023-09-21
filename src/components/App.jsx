import General from './General';
import Work from './Work';
import Education from './Education';
import ResumeOutput from './ResumeOutput';
import '../styles/styles.css';
import { useState } from 'react';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleGeneralInputChange = (e) => {
    const changedInput = e.target.name;
    setGeneralInfo((previousGeneralInfo) => {
      return { ...previousGeneralInfo, [changedInput]: e.target.value };
    });
  };

  return (
    <>
      <main>
        <div className='forms-container'>
          <General
            generalInfo={generalInfo}
            handleGeneralInputChange={handleGeneralInputChange}
          />
          <Work />
          <Education />
        </div>
        <ResumeOutput generalInfo={generalInfo} />
      </main>
    </>
  );
}

export default App;
