import './experience-item.css';

function ExperienceItem({
  companyName,
  positionTitle,
  workStartDate,
  workEndDate,
  workLocation,
  workDescription,
}) {
  let className = 'experience-li';
  return (
    <li className={className}>
      <div className='experience-left-side'>
        <div className='experience-start-end-date'>{`${workStartDate} - ${workEndDate}`}</div>
        <div className='experience-location'>{workLocation}</div>
      </div>
      <div className='experience-right-side'>
        <div className='experience-school'>
          <strong>{companyName}</strong>
          <span>{positionTitle}</span>
        </div>
        <div className='experience-description'>{workDescription}</div>
      </div>
    </li>
  );
}

export { ExperienceItem };
