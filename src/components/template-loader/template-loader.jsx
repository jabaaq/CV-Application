import { Component } from 'react';
import './template-loader.css';

class TemplateLoader extends Component {
  constructor(props) {
    super(props);
  }

  exampleDataLoad = {
    fullName: 'Jaba Kadagishvili',
    email: 'jabaqadagishvili4@gmail.com',
    phoneNumber: '+1 234 56 78 90',
    address: 'Georgia, Tbilisi',
    educationData: [
      {
        school: 'Georgian Technical university',
        degree: 'Information Technologies',
        startDate: '09/2020',
        endDate: 'Present',
        location: 'Georgia, Tbilisi',
        id: 1,
      },
    ],
    experienceData: [
      {
        companyName: 'Tech Innovators, Inc',
        positionTitle: 'Senior Software Developer',
        workStartDate: '08/2020',
        workEndDate: '01/2022',
        workLocation: 'San Francisco, CA',
        workDescription:
          'Led the development of a high-traffic e-commerce platform, improving website performance by 40% and enhancing the user experience. Collaborated with cross-functional teams to design and implement new features and enhancements. Conducted code reviews and mentored junior developers to improve code quality and team productivity.',
        id: 2,
      },
      {
        companyName: 'CyberGuard Solutions',
        positionTitle: 'Full-Stack Developer',
        workStartDate: '08/2021',
        workEndDate: 'Present',
        workLocation: 'New York, NY',
        workDescription:
          'Designed and implemented a secure, scalable, and user-friendly web application for threat detection and analysis. Developed RESTful APIs, integrated third-party APIs, and optimized database queries for improved system responsiveness. Assisted in architectural decisions and consistently met project deadlines.',
        id: 3,
      },
    ],
  };

  printCv = () => {
    window.print();
  };

  render() {
    const { clearAllData, exampleData } = this.props;

    return (
      <div className='template form-container space-between'>
        <button
          role='button'
          className='load-example-btn'
          onClick={() => {
            exampleData(this.exampleDataLoad);
          }}>
          Load Example
        </button>
        <button className='resume-clear-btn' onClick={clearAllData}>
          <svg viewBox='0 0 448 512' className='svgIcon'>
            <path d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z'></path>
          </svg>
        </button>
        <button className='Btn' onClick={this.printCv}>
          <svg
            className='svgIcon'
            viewBox='0 0 384 512'
            height='1em'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z'></path>
          </svg>
          <span className='icon2'></span>
          <span className='tooltip'>Download</span>
        </button>
      </div>
    );
  }
}

export { TemplateLoader };
