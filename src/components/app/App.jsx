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

      //state for the experience form
      companyName: '',
      positionTitle: '',
      workStartDate: '',
      workEndDate: '',
      workLocation: '',
      workDescription: '',
    };
  }

  setInformation = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { fullName, email, phoneNumber, address } = this.state;
    const { school, degree, startDate, endDate, location, description } =
      this.state;
    const {
      companyName,
      positionTitle,
      workStartDate,
      workEndDate,
      workLocation,
      workDescription,
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
          <PracticalExperience
            companyName={companyName}
            positionTitle={positionTitle}
            workStartDate={workStartDate}
            workEndDate={workEndDate}
            workLocation={workLocation}
            workDescription={workDescription}
            setInformation={this.setInformation}
          />
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
