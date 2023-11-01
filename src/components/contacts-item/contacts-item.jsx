import './contacts-item.css';
import Icon from '@mdi/react';
import { mdiEmail } from '@mdi/js';
import { mdiPhoneMessage } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';

function ContactsItem({ fullName, email, phoneNumber, address }) {
  return (
    <div className='contacts-details'>
      <div className='resume-name'>
        <h1>{fullName}</h1>
      </div>
      <div className='resume-contacts'>
        {email.length > 0 && (
          <h3>
            {<Icon path={mdiEmail} size={1} />} {email}
          </h3>
        )}
        {phoneNumber.length > 0 && (
          <h3>
            {<Icon path={mdiPhoneMessage} size={1} />} {phoneNumber}
          </h3>
        )}
        {address.length > 0 && (
          <h3>
            {<Icon path={mdiMapMarker} size={1} />} {address}
          </h3>
        )}
      </div>
    </div>
  );
}

export { ContactsItem };
