import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";

const ContactsPage = () => {

    
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