import './educationExperience.css';
import Accordion from '../accordion/accordion';
import { mdiSchool } from '@mdi/js';
import { Component } from 'react';

class EducationExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: 'Education',
    };
  }

  render() {
    const {
      setInformation,
      school,
      degree,
      startDate,
      endDate,
      location,
      onSubmitForm,
      clearForm,
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

    return (
      <div className='input-opening-container space-between'>
        <Accordion
          name={'Education'}
          fields={educationFields}
          fieldIcon={mdiSchool}
          setInformation={setInformation}
          source={this.state.source}
          onSubmitForm={(e) => {
            onSubmitForm(e, school, degree, startDate, endDate, location);
          }}
          clearForm={clearForm}
        />
      </div>
    );
  }
}
export { EducationExperience };
