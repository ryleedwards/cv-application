import General from './components/General';
import Education from './components/Education';
import ResumeOutput from './components/ResumeOutput';
import './styles/styles.css';

function App() {
  return (
    <>
      <main>
        <div className='forms-container'>
          <General />
          <Education />
        </div>
        <ResumeOutput />
      </main>
    </>
  );
}

export default App;
