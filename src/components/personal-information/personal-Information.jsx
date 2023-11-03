import './personal-Information.css';
import { Component } from 'react';

class PersonalInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fullName, email, phoneNumber, address, setInformation } =
      this.props;
    return (
      <div className='personal-information-container space-between'>
        <fieldset className='information-fields'>
          <h2>Personal Information</h2>
          <label htmlFor='fullName'>Full name</label>
          <input
            type='text'
            id='fullName'
            className='input_field'
            name='fullName'
            value={fullName}
            onChange={setInformation}
            placeholder='First and last name'
          />
          <label htmlFor='EmailField'>Email</label>
          <input
            type='text'
            id='EmailField'
            className='input_field'
            value={email}
            onChange={setInformation}
            name='email'
            placeholder='Enter email'
          />
          <label htmlFor='phoneNumber'>Phone number</label>
          <input
            type='text'
            id='phoneNumber'
            className='input_field'
            name='phoneNumber'
            value={phoneNumber}
            onChange={setInformation}
            placeholder='Enter phone number'
          />
          <label htmlFor='addressField'>Address</label>
          <input
            type='text'
            id='addressField'
            className='input_field'
            name='address'
            value={address}
            onChange={setInformation}
            placeholder='City, Country'
          />
        </fieldset>
      </div>
    );
  }
}

export { PersonalInformation };
