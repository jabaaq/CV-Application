import './personal-Information.css';
import { Component } from 'react';

class PersonalInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',
    };
  }

  setInformation = (e) => {
    const inputFieldName = e.target.name; //Since I have several fields, I compare field name and field value. that the
    const inputValue = e.target.value; //entered information is correctly recorded in the value of each field
    this.setState({
      [inputFieldName]: inputValue,
    });
  };

  render() {
    const { fullName, email, phoneNumber, address } = this.state;
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
            onChange={this.setInformation}
            placeholder='First and last name'
          />
          <label htmlFor='EmailField'>Email</label>
          <input
            type='text'
            id='EmailField'
            className='input_field'
            value={email}
            onChange={this.setInformation}
            name='email'
            placeholder='Enter email'
          />
          <label htmlFor='phoneNumber'>Phone number</label>
          <input
            type='number'
            id='phoneNumber'
            className='input_field'
            name='phoneNumber'
            value={phoneNumber}
            onChange={this.setInformation}
            placeholder='Enter phone number'
          />
          <label htmlFor='addressField'>Address</label>
          <input
            type='text'
            id='addressField'
            className='input_field'
            name='address'
            value={address}
            onChange={this.setInformation}
            placeholder='City, Country'
          />
        </fieldset>
      </div>
    );
  }
}

export { PersonalInformation };
