
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { getOperationContacts } from 'components/redux/contacts/contactsOperation';
import { selectIscontactsExist } from 'components/redux/selectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


  const App = () => {
     const isLoading = useSelector(state => state.contacts.isLoading);
     const error = useSelector(state => state.contacts.error);
const dispatch = useDispatch();
 
    const isContactsExist = useSelector(selectIscontactsExist)

  
  useEffect(() => {
    !isContactsExist.length && dispatch(getOperationContacts())
    }, [dispatch, isContactsExist ])
    
    return (
      <>
      
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2 style={{ textAlign: 'center' }}>Contacts list</h2>
        <ContactList />
         {isLoading && !error && <p> Contacts...</p>}
   </>
    )
  
}
export default App;
  
//(state) => Boolean(state.contacts.length):
// Це анонімна функція, яка приймає стан зберігання(отриманий з useSelector) як аргумент.
//Вона перевіряє довжину масиву contacts у стані та застосовує функцію Boolean до цього значення.
//Функція Boolean перетворює будь - яке значення на логічне true, 
//якщо значення існує, та на false, якщо значення порожнє.