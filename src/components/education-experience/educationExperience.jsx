import './educationExperience.css';
import Accordion from '../accordion/accordion';
import { mdiSchool } from '@mdi/js';

function EducationExperience() {
  const educationFields = [
    { label: 'School', placeholder: 'Enter school / university' },
    { label: 'Degree', placeholder: 'Enter Degree / Field Of Study' },
    { label: 'Start Date', placeholder: 'Enter Start Date' },
    { label: 'End Date', placeholder: 'Enter End Date' },
    { label: 'Location (optional)', placeholder: 'Enter Location' },
  ];

  return (
    <div className='input-opening-container space-between'>
      <Accordion
        name={'Education'}
        fields={educationFields}
        fieldIcon={mdiSchool}
      />
    </div>
  );
}

export { EducationExperience };
