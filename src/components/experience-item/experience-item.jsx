import './experience-item.css';

function ExperienceItem() {
  let className = 'experience-li';
  return (
    <li className={className}>
      <div className='experience-left-side'>
        <div className='experience-start-end-date'>{`${'08-2020'} - ${'08-2023'}`}</div>
        <div className='experience-location'>Berlin, Germany</div>
      </div>
      <div className='experience-right-side'>
        <div className='experience-school'>
          <strong>Black Mesa Labs</strong>
        </div>
        <div className='experience-description'>
          Supported senior researchers on accessibility standards for the open
          web. Created and usability tested wireframes and prototypes. Produced
          interactive documentation for quick onboarding of new researchers.
        </div>
      </div>
    </li>
  );
}

export { ExperienceItem };
