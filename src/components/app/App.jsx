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

      //state for the experience form
      companyName: '',
      positionTitle: '',
      workStartDate: '',
      workEndDate: '',
      workLocation: '',
      workDescription: '',

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
          school: 'Georgian technical university',
          degree: 'Information Technologies',
          startDate: '08/2020',
          endDate: 'present',
          location: 'Georgia, Tbilisi',
          id: 2,
        },
      ],

      // data: [
      //   {
      //     fullName: 'Thomas Parker',
      //     email: 'thomasParker123@test.com',
      //     phoneNumber: '+1 234 56 78 90',
      //     companyName: 'Umbrella Inc.',
      //     positionTitle: 'UX & UI Designer',
      //     workStartDate: '08/2020',
      //     workEndDate: 'present',
      //     workLocation: 'New York City, US',
      //     workDescription:
      //       'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
      //   },
      // ],
    };
  }
  setInformation = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addEducationItem = (e, school, degree, startDate, endDate, location) => {
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

  clearForm = () => {
    this.setState({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
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

    const { educationData } = this.state;

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
            setInformation={this.setInformation}
            addEducationItem={this.addEducationItem}
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
          />
        </div>
        <div className='resume-side'>
          <Resume
            fullName={fullName}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
            educationData={educationData}
            onSubmitForm={this.addEducationItem}
          />
        </div>
      </div>
    );
  }
}
export default App;
