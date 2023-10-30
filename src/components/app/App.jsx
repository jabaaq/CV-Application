import './App.css';
import { TemplateLoader } from '../template-loader/template-loader';
import { PersonalInformation } from '../personal-information/personal-Information';
import { EducationExperience } from '../education-experience/educationExperience';
import { PracticalExperience } from '../practical-experience/practical-experience';
import { Resume } from '../resume/resume';

function App() {
  return (
    <div className='app'>
      <div className='edit-side'>
        <TemplateLoader />
        <PersonalInformation />
        <EducationExperience />
        <PracticalExperience />
      </div>
      <div className='resume-side'>
        <Resume />
      </div>
    </div>
  );
}
export default App;
