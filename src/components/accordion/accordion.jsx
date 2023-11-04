import './accordion.css';
import Icon from '@mdi/react';
import React, { Component } from 'react';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleAccordion = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const {
      name,
      fields,
      fieldIcon,
      textArea,
      setInformation,
      //education information
      onSubmitForm,
      school,
      degree,
      startDate,
      endDate,
      location,
      clearForm,

      //experience information
      onSubmitExperienceForm,
      companyName,
      positionTitle,
      workStartDate,
      workEndDate,
      workLocation,
      workDescription,
      clearExperienceForm,

      source,
    } = this.props;

    const { isOpen } = this.state;

    return (
      <div className='accordion-container accordion'>
        <div className='accordion-header' onClick={this.toggleAccordion}>
          <Icon path={fieldIcon} size={1} />
          <h2>{name}</h2>
          <i className={`icon ${isOpen ? 'icon-open' : 'icon-close'}`}>
            &#9660;
          </i>
        </div>
        {isOpen && (
          <div className='accordion-content'>
            {fields.map((field, index) => (
              <div className='field' key={index}>
                <label>{field.label}</label>
                <input
                  type='text'
                  className='input_field'
                  placeholder={field.placeholder}
                  name={field.name}
                  value={field.value}
                  onChange={setInformation}
                />
              </div>
            ))}

            <div className='button-container'>
              <button className='delete-button'>Delete</button>
              <button className='cancel-button'>Cancel</button>
              <button
                type='submit'
                className='save-button'
                onClick={(e) => {
                  if (source === 'Education') {
                    onSubmitForm(
                      e,
                      school,
                      degree,
                      startDate,
                      endDate,
                      location,
                    );
                    clearForm();
                  } else if (source === 'Experience') {
                    onSubmitExperienceForm(
                      e,
                      companyName,
                      positionTitle,
                      workStartDate,
                      workEndDate,
                      workLocation,
                      workDescription,
                    );
                    clearExperienceForm();
                  }
                }}>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Accordion;
