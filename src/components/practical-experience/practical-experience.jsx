import './practical-experience.css';
import Accordion from '../accordion/accordion';
import { mdiBriefcaseVariant } from '@mdi/js';

function PracticalExperience() {
  const experienceFields = [
    { label: 'Company Name', placeholder: 'Enter company name' },
    { label: 'Position Title', placeholder: 'Enter position title' },
    { label: 'Start Date', placeholder: 'Enter Start Date' },
    { label: 'End Date', placeholder: 'Enter End Date' },
    { label: 'Location (optional)', placeholder: 'Enter Location' },
  ];

  const descriptionForArea = {
    label: 'Description',
    placeholder: 'Enter description',
  };

  return (
    <div className='input-opening-container space-between'>
      <Accordion
        name={'Experience'}
        fields={experienceFields}
        fieldIcon={mdiBriefcaseVariant}
        textArea={descriptionForArea}
      />
    </div>
  );
}

export { PracticalExperience };
