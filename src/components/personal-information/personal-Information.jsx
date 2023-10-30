import './personal-Information.css';

function PersonalInformation() {
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
          placeholder='First and last name'
        />
        <label htmlFor='EmailField'>Email</label>
        <input
          type='text'
          id='EmailField'
          className='input_field'
          name='EmailField'
          placeholder='Enter email'
        />
        <label htmlFor='phoneNumber'>Phone number</label>
        <input
          type='number'
          id='phoneNumber'
          className='input_field'
          name='phoneNumber'
          placeholder='Enter phone number'
        />
        <label htmlFor='addressField'>Address</label>
        <input
          type='text'
          id='addressField'
          className='input_field'
          name='addressField'
          placeholder='City, Country'
        />
      </fieldset>
    </div>
  );
}

export { PersonalInformation };
