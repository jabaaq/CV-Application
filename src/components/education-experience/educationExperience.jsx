import './educationExperience.css';
import Accordion from '../accordion/accordion';

function EducationExperience() {
  const educationFields = [
    { label: 'School', placeholder: 'Enter school / university' },
    { label: 'Degree', placeholder: 'Enter Degree / Field Of Study' },
    { label: 'Start Date', placeholder: 'Enter Start Date' },
    { label: 'End Date', placeholder: 'Enter End Date' },
    { label: 'Location (optional)', placeholder: 'Enter Location' },
  ];

  return (
    <div className='left-side education-container'>
      <Accordion name={'Education'} fields={educationFields} />
    </div>
  );
}

export { EducationExperience };
