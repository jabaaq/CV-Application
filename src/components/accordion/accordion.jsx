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
      clearForm,
      //education information
      addEducationItem,
      school,
      degree,
      startDate,
      endDate,
      location,
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

            {textArea && (
              <>
                <label htmlFor='description'>{textArea.label}</label>
                <textarea
                  name='description'
                  placeholder={textArea.placeholder}
                  id='description'
                  cols='20'
                  rows='10'
                  value={textArea.value}
                  onChange={setInformation}></textarea>
              </>
            )}
            <div className='button-container'>
              <button className='delete-button'>Delete</button>
              <button className='cancel-button'>Cancel</button>
              <button
                type='submit'
                className='save-button'
                onClick={(e) => {
                  addEducationItem(
                    e,
                    school,
                    degree,
                    startDate,
                    endDate,
                    location,
                  );
                  clearForm();
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
