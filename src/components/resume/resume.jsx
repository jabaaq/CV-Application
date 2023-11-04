import './resume.css';
import { ContactsItem } from '../contacts-item/contacts-item';
import { EducationItem } from '../education-item/education-item';
import { ExperienceItem } from '../experience-item/experience-item';

function Resume({
  fullName,
  email,
  phoneNumber,
  address,
  setInformation,
  //for education
  educationData,
  //for experience
  experienceData,
}) {
  return (
    <div className='resume-paper'>
      <div className='resume-header'>
        <ContactsItem
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
          setInformation={setInformation}
        />
      </div>
      <div className='resume-education'>
        <div className='education-header'>Education</div>
        <div className='education-details'>
          <ul className='added-education-information'>
            {educationData.map((item) => {
              return (
                <EducationItem
                  school={item.school}
                  degree={item.degree}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  location={item.location}
                  key={item.id}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <div className='resume-experience'>
        <div className='experience-header'>Professional Experience</div>
        <div className='experience-details'>
          <ul className='added-experience-information'>
            {experienceData.map((item) => {
              return (
                <ExperienceItem
                  companyName={item.companyName}
                  positionTitle={item.positionTitle}
                  workStartDate={item.workStartDate}
                  workEndDate={item.workEndDate}
                  workLocation={item.workLocation}
                  workDescription={item.workDescription}
                  key={item.id}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export { Resume };
