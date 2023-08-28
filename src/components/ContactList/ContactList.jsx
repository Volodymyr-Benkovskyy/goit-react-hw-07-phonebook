

import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getStoreContacts, getStoreFilter } from 'components/redux/selectors';
import { removeContact } from 'components/redux/contactsSlice';


const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getStoreContacts);
  const filter = useSelector(getStoreFilter)


  const filterContactsByName = () => filter
    
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  
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
              onClick={() => dispatch(removeContact(id))}>
              Delete
            </button>
          </li>
        ))}
    </ul>
    
  )

};

export default ContactList;


//  <ul className={s.contactList}>
     
    
//     { contacts.length !== 0 &&
//     filterContactsByName().map(({ id, name, number }) => {
//       return (
//         <ul>      
//         <li className={s.contactItem} key={id}>
//           {name}: {number}
//           <button className={s.contactBtnDel} onClick={() => dispatch(removeContact(id))} type="button">
//             Delete
//           </button>
//         </li>
//         </ul>
       
//       );
//     })}
  //  </ul>