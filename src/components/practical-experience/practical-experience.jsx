import 'practical-experience.css';
import Accordion from '../accordion/accordion';

function PracticalExperience() {
  const experienceFields = [
    { label: 'Company Name', placeholder: 'Enter company name' },
    { label: 'Position Title', placeholder: 'Enter position title' },
    { label: 'Start Date', placeholder: 'Enter Start Date' },
    { label: 'End Date', placeholder: 'Enter End Date' },
    { label: 'Location (optional)', placeholder: 'Enter Location' },
  ];
  return (
    <div className='left-side experience-container'>
      <Accordion name={'Experience'} fields={experienceFields} />
    </div>
  );
}

export { PracticalExperience };
