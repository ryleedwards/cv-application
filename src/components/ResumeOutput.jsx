export default function ResumeOutput() {
  return (
    <div className='resume-container'>
      <div className='personal-info-container'>
        <p className='full-name'>John Smith</p>
        <div>
          <p className='label email-label'>E-mail </p>
          <p className='email'>jsmith@gmail.com</p>
        </div>
        <div>
          <p className='label phone-label'>Phone </p>
          <p className='phone'>(512) 867-5309</p>
        </div>
      </div>
      <div className='work-history-container'>
        <p className='work-history-title'>Work History</p>
        <ul>
          <li className='work-item'>
            <div className='duration'>
              <p className='start-date'>2016-09</p>
              <p> - </p>
              <p className='end-date'>2018-04</p>
            </div>
            <div className='work-details-container'>
              <p className='work-item-title'>Customer Service Specialist</p>
              <div className='work-name-location-container'>
                <p className='work-item-company'>
                  Charles E. Cheese Entertainment
                </p>
                <p>,</p>
                <p className='work-item-location'>Austin, TX</p>
              </div>
              <ul className='work-item-responsibilities'>
                <li className='responsibility-item'>
                  Supported customers in day-to-day activities.
                </li>
                <li className='responsibility-item'>
                  Implemented new team onboarding program, reducing training
                  time from four weeks to two.
                </li>
              </ul>
            </div>
          </li>
          <li className='work-item'>
            <div className='duration'>
              <p className='start-date'>2016-09</p>
              <p> - </p>
              <p className='end-date'>2018-04</p>
            </div>
            <div className='work-details-container'>
              <p className='work-item-title'>Customer Service Specialist</p>
              <div className='work-name-location-container'>
                <p className='work-item-company'>
                  Charles E. Cheese Entertainment
                </p>
                <p>,</p>
                <p className='work-item-location'>Austin, TX</p>
              </div>
              <ul className='work-item-responsibilities'>
                <li className='responsibility-item'>
                  Supported customers in day-to-day activities.
                </li>
                <li className='responsibility-item'>
                  Implemented new team onboarding program, reducing training
                  time from four weeks to two.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
