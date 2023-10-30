import './education-item.css';

function EducationItem() {
  let className = 'information-li';

  return (
    <li className={className}>
      <div className='education-left-side'>
        <div className='education-start-end-date'>{`${'08-2020'} - ${'08-2023'}`}</div>
        <div className='education-location'>New York City, USasda</div>
      </div>
      <div className='education-right-side'>
        <div className='education-school'>
          <strong>London City University</strong>
        </div>
        <div className='education-degree'>
          Bachelor of Science in Computer Science
        </div>
      </div>
    </li>
  );
}

export { EducationItem };
