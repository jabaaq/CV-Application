import './contacts-item.css';
import { Component } from 'react';
import Icon from '@mdi/react';
import { mdiEmail } from '@mdi/js';
import { mdiPhoneMessage } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';
import { PersonalInformation } from '../personal-information/personal-Information';

class ContactsItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fullName, email, phoneNumber, address, setInformation } =
      this.props;
    return (
      <div className='contacts-details'>
        <div className='resume-name'>
          <h1>{fullName}</h1>
        </div>
        <div className='resume-contacts'>
          <h3 value={fullName}>
            {<Icon path={mdiEmail} size={1} />} {email}
          </h3>
          <h3>
            {<Icon path={mdiPhoneMessage} size={1} />} {phoneNumber}
          </h3>
          <h3>
            {<Icon path={mdiMapMarker} size={1} />} {address}
          </h3>
        </div>
      </div>
    );
  }
}

export { ContactsItem };
