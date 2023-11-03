import './practical-experience.css';
import Accordion from '../accordion/accordion';
import { mdiBriefcaseVariant } from '@mdi/js';

function PracticalExperience({
  companyName,
  positionTitle,
  workStartDate,
  workEndDate,
  workLocation,
  workDescription,
  setInformation,
}) {
  const experienceFields = [
    {
      label: 'Company Name',
      placeholder: 'Enter company name',
      name: 'companyName',
      value: companyName,
    },
    {
      label: 'Position Title',
      placeholder: 'Enter position title',
      name: 'positionTitle',
      value: positionTitle,
    },
    {
      label: 'Start Date',
      placeholder: 'Enter Start Date',
      name: 'workStartDate',
      value: workStartDate,
    },
    {
      label: 'End Date',
      placeholder: 'Enter End Date',
      name: 'workEndDate',
      value: workEndDate,
    },
    {
      label: 'Location (optional)',
      placeholder: 'Enter Location',
      name: 'workLocation',
      value: workLocation,
    },
  ];

  const descriptionForArea = {
    label: 'Description',
    placeholder: 'Enter description',
    name: 'workDescription',
    value: workDescription,
  };

  return (
    <div className='input-opening-container space-between'>
      <Accordion
        name={'Experience'}
        fields={experienceFields}
        fieldIcon={mdiBriefcaseVariant}
        textArea={descriptionForArea}
        setInformation={setInformation}
      />
    </div>
  );
}

export { PracticalExperience };
