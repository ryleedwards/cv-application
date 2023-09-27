export default function ResumeOutput({ generalInfo, workList }) {
  return (
    <div className='resume-container'>
      <div className='personal-info-container'>
        <p className='full-name'>
          {generalInfo.firstName} {generalInfo.lastName}
        </p>
        <div>
          <p className='label email-label'>E-mail </p>
          <p className='email'>{generalInfo.email}</p>
        </div>
        <div>
          <p className='label phone-label'>Phone </p>
          <p className='phone'>{generalInfo.phone}</p>
        </div>
      </div>
      <div className='work-history-container'>
        <p className='work-history-title'>Work History</p>
        <ul>
          {workList.map((workItem) => {
            return (
              <li className='work-item' key={workItem.id} data-id={workItem.id}>
                <div className='duration'>
                  <p className='start-date'>{workItem.startDate}</p>
                  <p> - </p>
                  <p className='end-date'>{workItem.endDate}</p>
                </div>
                <div className='work-details-container'>
                  <p className='work-item-title'>{workItem.title}</p>
                  <div className='work-name-location-container'>
                    <p className='work-item-company'>{workItem.employer}</p>
                    <p>,</p>
                    <p className='work-item-location'>{workItem.location}</p>
                  </div>
                  <p className='work-item-description'>
                    {workItem.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
