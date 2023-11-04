import './education-item.css';

function EducationItem({ school, degree, startDate, endDate, location }) {
  let className = 'education-li';
  return (
    <li className={className}>
      <div className='education-left-side'>
        <div className='education-start-end-date'>{`${startDate} - ${endDate}`}</div>
        <div className='education-location'>{location}</div>
      </div>
      <div className='education-right-side'>
        <div className='education-school'>
          <strong>{school}</strong>
        </div>
        <div className='education-degree'>{degree}</div>
      </div>
    </li>
  );
}

export { EducationItem };
