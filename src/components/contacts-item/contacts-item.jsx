import './contacts-item.css';
import Icon from '@mdi/react';
import { mdiEmail } from '@mdi/js';
import { mdiPhoneMessage } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';

function ContactsItem() {
  return (
    <div className='contacts-details'>
      <div className='resume-name'>
        <h1> John Doe</h1>
      </div>
      <div className='resume-contacts'>
        <h3>{<Icon path={mdiEmail} size={1} />} josephine.meyers@mail.co.uk</h3>
        <h3>{<Icon path={mdiPhoneMessage} size={1} />} +44 3245 5521 5521</h3>
        <h3>{<Icon path={mdiMapMarker} size={1} />} London, UK</h3>
      </div>
    </div>
  );
}

export { ContactsItem };
