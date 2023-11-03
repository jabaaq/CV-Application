import './App.css';
import { Component } from 'react';
import { TemplateLoader } from '../template-loader/template-loader';
import { PersonalInformation } from '../personal-information/personal-Information';
import { EducationExperience } from '../education-experience/educationExperience';
import { PracticalExperience } from '../practical-experience/practical-experience';
import { Resume } from '../resume/resume';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',

      //state for the education form
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    };
  }

  setInformation = (e) => {
    const inputFieldName = e.target.name; //Since I have several fields, I compare field name and field value. that the
    const inputValue = e.target.value; //entered information is correctly recorded in the value of each field
    this.setState({
      [inputFieldName]: inputValue,
    });
  };

  render() {
    const {
      fullName,
      email,
      phoneNumber,
      address,
      school,
      degree,
      startDate,
      endDate,
      location,
      description,
    } = this.state;

    return (
      <div className='app'>
        <div className='edit-side'>
          <TemplateLoader />
          <PersonalInformation
            fullName={fullName}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
            setInformation={this.setInformation}
          />
          <EducationExperience
            school={school}
            degree={degree}
            startDate={startDate}
            endDate={endDate}
            location={location}
            description={description}
            setInformation={this.setInformation}
          />
          <PracticalExperience />
        </div>
        <div className='resume-side'>
          <Resume
            fullName={fullName}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
          />
        </div>
      </div>
    );
  }
}
export default App;
