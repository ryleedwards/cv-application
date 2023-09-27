import General from './General';
import Work from './Work';
import ResumeOutput from './ResumeOutput';
import '../styles/styles.css';
import { useState } from 'react';
import { tempWorkList } from '../utils/workList';

function App() {
  // generalInfo State Definition
  const [generalInfo, setGeneralInfo] = useState({
    firstName: 'First',
    lastName: 'Last',
    email: 'firstlast@gmail.com',
    phone: '(512) 867-5309',
  });

  // generalInfo Input Handler
  const handleGeneralInputChange = (e) => {
    const changedInput = e.target.name;
    setGeneralInfo((previousGeneralInfo) => {
      return { ...previousGeneralInfo, [changedInput]: e.target.value };
    });
  };

  // workList State Definition
  const [workList, setWorkList] = useState(
    tempWorkList.map((workItem) => {
      return {
        id: workItem.id,
        title: workItem.title,
        employer: workItem.employer,
        location: workItem.location,
        startDate: workItem.startDate,
        endDate: workItem.endDate,
        description: workItem.description,
      };
    })
  );

  // workItem State Definition
  const [workItem, setWorkItem] = useState({
    id: '',
    title: 'Worker',
    employer: 'ABC Corp',
    location: 'Austin, TX',
    startDate: '2021-04-01',
    endDate: '2021-05-01',
    description: 'Did work things',
  });

  const handleWorkItemInputChange = (e) => {
    const changedInput = e.target.name;
    setWorkItem((previousWorkItem) => {
      return { ...previousWorkItem, [changedInput]: e.target.value };
    });
  };

  const handleEmploymentSubmitClick = (e) => {
    e.preventDefault();
    setWorkList((prevWorkList) => {
      return [...prevWorkList, workItem];
    });
    console.log(workList);
  };

  return (
    <main>
      <div>
        <General
          generalInfo={generalInfo}
          handleGeneralInputChange={handleGeneralInputChange}
        />
        <Work
          workItem={workItem}
          handleWorkItemInputChange={handleWorkItemInputChange}
          handleEmploymentSubmitClick={handleEmploymentSubmitClick}
        />
      </div>
      <ResumeOutput generalInfo={generalInfo} workList={workList} />
    </main>
  );
}

export default App;
