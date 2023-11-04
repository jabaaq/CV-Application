import './App.css';
import { Component } from 'react';
import { TemplateLoader } from '../template-loader/template-loader';
import { PersonalInformation } from '../personal-information/personal-Information';
import { EducationExperience } from '../education-experience/educationExperience';
import { PracticalExperience } from '../practical-experience/practical-experience';
import { CreatedBy } from '../createdBy/createdBy';
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

      //state for the experience form
      companyName: '',
      positionTitle: '',
      workStartDate: '',
      workEndDate: '',
      workLocation: '',
      workDescription: '',

      //education data
      educationData: [
        {
          school: 'London City University',
          degree: 'Bachelors in Economics',
          startDate: '08/2020',
          endDate: 'present',
          location: 'New York City,US',
          id: 1,
        },
        {
          school: 'Georgian Technical university',
          degree: 'Information Technologies',
          startDate: '08/2020',
          endDate: 'present',
          location: 'Georgia, Tbilisi',
          id: 2,
        },
      ],

      //experience data
      experienceData: [
        {
          companyName: 'Tech Innovators, Inc',
          positionTitle: 'Senior Software Developer',
          workStartDate: '08/2020',
          workEndDate: '01/2022',
          workLocation: 'San Francisco, CA',
          workDescription:
            'Led the development of a high-traffic e-commerce platform, improving website performance by 40% and enhancing the user experience. Collaborated with cross-functional teams to design and implement new features and enhancements. Conducted code reviews and mentored junior developers to improve code quality and team productivity.',
          id: 1,
        },
      ],
    };
  }
  setInformation = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleEducationSubmit = (e, school, degree, startDate, endDate, location) => {
    e.preventDefault();
    this.setState(({ educationData }) => {
      const newEducationData = [...educationData];
      newEducationData.push({
        school: school,
        degree: degree,
        startDate: startDate,
        endDate: endDate,
        location: location,
        id: Math.floor(Math.random() * 1000),
      });
      return { educationData: newEducationData };
    });
  };

  handleExperienceSubmit = (
    e,
    companyName,
    positionTitle,
    workStartDate,
    workEndDate,
    workLocation,
    workDescription,
  ) => {
    e.preventDefault();
    this.setState(({ experienceData }) => {
      const newExperienceData = [...experienceData];
      newExperienceData.push({
        companyName: companyName,
        positionTitle: positionTitle,
        workStartDate: workStartDate,
        workEndDate: workEndDate,
        workLocation: workLocation,
        workDescription: workDescription,
        id: Math.floor(Math.random() * 1000),
      });
      return { experienceData: newExperienceData };
    });
  };

  clearExperienceForm = () => {
    this.setState({
      companyName: '',
      positionTitle: '',
      workStartDate: '',
      workEndDate: '',
      workLocation: '',
      workDescription: '',
    });
  };

  clearForm = () => {
    this.setState({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    });
  };

  clearAllData = () => {
    this.setState({
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',
      educationData: [],
      experienceData: [],
    });
  };

  loadExampleData = (example) => {
    this.setState({
      fullName: example.fullName,
      email: example.email,
      phoneNumber: example.phoneNumber,
      address: example.address,
      educationData: example.educationData,
      experienceData: example.experienceData,
    });
  };

  render() {
    const { fullName, email, phoneNumber, address } = this.state;
    const { school, degree, startDate, endDate, location } = this.state;
    const {
      companyName,
      positionTitle,
      workStartDate,
      workEndDate,
      workLocation,
      workDescription,
    } = this.state;

    const { educationData, experienceData } = this.state;

    return (
      <div className='app'>
        <div className='edit-side'>
          <TemplateLoader
            clearAllData={this.clearAllData}
            exampleData={this.loadExampleData}
          />
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
            setInformation={this.setInformation}
            onSubmitForm={this.handleEducationSubmit}
            clearForm={this.clearForm}
          />
          <PracticalExperience
            companyName={companyName}
            positionTitle={positionTitle}
            workStartDate={workStartDate}
            workEndDate={workEndDate}
            workLocation={workLocation}
            workDescription={workDescription}
            setInformation={this.setInformation}
            onSubmitExperienceForm={this.handleExperienceSubmit}
            clearExperienceForm={this.clearExperienceForm}
          />
          <CreatedBy />
        </div>
        <div className='resume-side'>
          <Resume
            fullName={fullName}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
            educationData={educationData}
            experienceData={experienceData}
            onSubmitForm={this.handleEducationSubmit}
            onSubmitExperienceForm={this.handleExperienceSubmit}
          />
        </div>
      </div>
    );
  }
}
export default App;
