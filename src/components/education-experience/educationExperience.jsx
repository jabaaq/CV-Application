import './educationExperience.css';
import Accordion from '../accordion/accordion';
import { mdiSchool } from '@mdi/js';
import { Component } from 'react';

class EducationExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      setInformation,
      school,
      degree,
      startDate,
      endDate,
      location,
      description,
    } = this.props;

    const educationFields = [
      {
        label: 'School',
        placeholder: 'Enter school / university',
        value: school,
        name: 'school',
      },
      {
        label: 'Degree',
        placeholder: 'Enter Degree / Field Of Study',
        value: degree,
        name: 'degree',
      },
      {
        label: 'Start Date',
        placeholder: 'Enter Start Date',
        value: startDate,
        name: 'startDate',
      },
      {
        label: 'End Date',
        placeholder: 'Enter End Date',
        value: endDate,
        name: 'endDate',
      },
      {
        label: 'Location (optional)',
        placeholder: 'Enter Location',
        value: location,
        name: 'location',
      },
    ];

    const descriptionForArea = {
      label: 'Description',
      placeholder: 'Enter description',
      value: description,
      name: 'description',
    };

    return (
      <div className='input-opening-container space-between'>
        <Accordion
          name={'Education'}
          fields={educationFields}
          fieldIcon={mdiSchool}
          textArea={descriptionForArea}
          setInformation={setInformation}
        />
      </div>
    );
  }
}
export { EducationExperience };
