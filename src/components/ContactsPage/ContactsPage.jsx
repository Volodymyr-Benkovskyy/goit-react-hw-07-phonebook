import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { getOperationContacts } from "components/redux/contacts/contactsOperation";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getContactsApi } from "services/firebasApi";

const ContactsPage = () => {
  // Використовуємо useSelector для перевірки наявності контактів у стані Boolean trau false
   const isContactsExist = useSelector((state)=> Boolean(state.contacts.length)); 
  const dispatch = useDispatch();

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
   
   </>
    )
}

export default ContactsPage;


//(state) => Boolean(state.contacts.length):
// Це анонімна функція, яка приймає стан зберігання(отриманий з useSelector) як аргумент.
//Вона перевіряє довжину масиву contacts у стані та застосовує функцію Boolean до цього значення.
//Функція Boolean перетворює будь - яке значення на логічне true, 
//якщо значення існує, та на false, якщо значення порожнє.