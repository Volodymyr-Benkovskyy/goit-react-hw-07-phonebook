import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { getOperationContacts } from "components/redux/contacts/contactsOperation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//import { getContactsApi } from "services/firebasApi";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getOperationContacts())
    }, [dispatch])
    
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