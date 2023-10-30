import React, { useState } from 'react';
import './accordion.css';
import Icon from '@mdi/react';
import { mdiSchool } from '@mdi/js';

const Accordion = ({ name, fields, fieldIcon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='accordion-container accordion'>
      <div className='accordion-header' onClick={toggleAccordion}>
        <Icon path={fieldIcon} size={1} />
        <h2>{name}</h2>
        <i className={`icon ${isOpen ? 'icon-open' : 'icon-close'}`}>&#9660;</i>
      </div>
      {isOpen && (
        <div className='accordion-content'>
          {fields.map(
            (
              field,
              index, //I define these fields in the EducationExperience.jsx component
            ) => (
              <div className='field' key={index}>
                <label>{field.label}</label>
                <input
                  type='text'
                  className='input_field'
                  placeholder={field.placeholder}
                />
              </div>
            ),
          )}
          <div className='button-container'>
            <button className='delete-button'>Delete</button>
            <button className='cancel-button'>Cancel</button>
            <button className='save-button'>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
