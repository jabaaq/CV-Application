import './App.css';
import { TemplateLoader } from '../template-loader/template-loader';
import { PersonalInformation } from '../personal-information/personal-Information';
import { EducationExperience } from '../education-experience/educationExperience';

function App() {
  return (
    <div className='app'>
      <TemplateLoader />
      <PersonalInformation />
      <EducationExperience />
    </div>
  );
}
export default App;
