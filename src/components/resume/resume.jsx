import './resume.css';
import { EducationItem } from '../education-item/education-item';
import { ExperienceItem } from '../experience-item/experience-item';

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
            <EducationItem />
          </ul>
        </div>
      </div>
      <div className='resume-experience'>
        <div className='experience-header'>Professional Experience</div>
        <div className='experience-details'>
          <ul className='added-experience-information'>
            <ExperienceItem />
            <ExperienceItem />
            <ExperienceItem />
            <ExperienceItem />
            <ExperienceItem />
          </ul>
        </div>
      </div>
    </div>
  );
}

export { Resume };
