import './practical-experience.css';
import Accordion from '../accordion/accordion';
import { mdiBriefcaseVariant } from '@mdi/js';
import { Component } from 'react';

class PracticalExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: 'Experience',
    };
  }

  render() {
    const {
      companyName,
      positionTitle,
      workStartDate,
      workEndDate,
      workLocation,
      workDescription,
      setInformation,
      onSubmitExperienceForm,
      clearExperienceForm,
    } = this.props;

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
      {
        label: 'Jon Description',
        placeholder: 'Enter Jon Description',
        name: 'workDescription',
        value: workDescription,
      },
    ];

    return (
      <div className='input-opening-container space-between'>
        <Accordion
          name={'Experience'}
          fields={experienceFields}
          fieldIcon={mdiBriefcaseVariant}
          // textArea={descriptionForArea}
          setInformation={setInformation}
          source={this.state.source}
          onSubmitExperienceForm={(e) => {
            onSubmitExperienceForm(
              e,
              companyName,
              positionTitle,
              workStartDate,
              workEndDate,
              workLocation,
              workDescription,
            );
          }}
          clearExperienceForm={clearExperienceForm}
        />
      </div>
    );
  }
}

export { PracticalExperience };
