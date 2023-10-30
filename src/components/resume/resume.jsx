import './resume.css';
import { EducationItem } from '../education-item/education-item';

function Resume() {
  return (
    <div className='resume-paper'>
      <div className='resume-header'>
        <div className='resume-name'>
          <h1>John Doe</h1>
        </div>
        <div className='resume-contacts'>
          <h3>josephine.meyers@mail.co.uk +44 3245 5521 5521 London, UK</h3>
        </div>
      </div>
      <div className='resume-education'>
        <div className='education-header'>Education</div>
        <div className='education-details'>
          <ul className='added-education-information'>
            <EducationItem />
          </ul>
        </div>
      </div>
      <div className='resume-experience'>
        <div className='experience-header'>Professional Experience</div>
        <div className='experience-details'>
          <div className='experience-left-side'>
            <div className='experience-start-end-date'>{`${'08-2020'} - ${'08-2023'}`}</div>
            <div className='experience-location'>Berlin, Germany</div>
          </div>
          <div className='experience-right-side'>
            <div className='experience-school'>
              <strong>Black Mesa Labs</strong>
            </div>
            <div className='experience-description'>
              Supported senior researchers on accessibility standards for the
              open web. Created and usability tested wireframes and prototypes.
              Produced interactive documentation for quick onboarding of new
              researchers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Resume };
