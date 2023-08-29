

import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getStoreContacts, getStoreFilter } from 'components/redux/selectors';
import { deleteOperationContacts } from 'components/redux/contacts/contactsOperation';


const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getStoreContacts);
  const filter = useSelector(getStoreFilter)

  console.log("hello word");
  const filterContactsByName = () => filter
    
      ? contacts.filter( itemsContact =>
          itemsContact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts ;
  
  return (
   
      <ul className={s.contactList}>
      {contacts.length !== 0 &&
        filterContactsByName().map(({ id, name, number }) => (
          <li key={id} className={s.contactItem}>
            <span>
              {name}: {number}
            </span>
            

            <button
              className={s.contactBtnDel  }  
              type="button"
              onClick={() => dispatch(deleteOperationContacts(id))}>
              Delete
            </button>
          </li>
        ))}
    </ul>
    
  )

};

export default ContactList;



     
    
