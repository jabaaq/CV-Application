import './resume.css';
import { Component } from 'react';
import { ContactsItem } from '../contacts-item/contacts-item';
import { EducationItem } from '../education-item/education-item';
import { ExperienceItem } from '../experience-item/experience-item';

class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fullName, email, phoneNumber, address, setInformation } =
      this.props;
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
              <EducationItem />
            </ul>
          </div>
        </div>
        <div className='resume-experience'>
          <div className='experience-header'>Professional Experience</div>
          <div className='experience-details'>
            <ul className='added-experience-information'>
              <ExperienceItem />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { Resume };
