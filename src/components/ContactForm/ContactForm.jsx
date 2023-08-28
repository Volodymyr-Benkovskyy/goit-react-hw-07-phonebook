
import { useState } from 'react';
import s from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'components/redux/contactsSlice';


const ContactForm = () => {
   
  const contacts = useSelector(state => state.contacts.contacts)
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    number: "",
    isContactValid: true,
  })

  const handleNameChange = event => {
    const { name, value } = event.target;

           setForm(prevData => ({
      ...prevData,
      [name]: value,
      isContactValid: !contactExists
    }));

    const contactExists = contacts.some(contact => contact.number === value);
    
    if (name === 'number' && contactExists) {
      alert(`A contact ${form.name} with the same number already exists.`);
       setForm({ name: "", number: "", })
    }
     
      else if (!form.isContactValid) {
      return;
    }
  };

 const handleSubmit = event => {
   event.preventDefault();
  
    const newContact = { name: form.name, id: nanoid(), number: form.number };
    dispatch(addContact(newContact));

   setForm({ name: "", number: "", })
  }

    return (
      
      <form className={s.formBox} onSubmit={handleSubmit}>
          
          <label>Name</label>
          <input
            className={s.formInput}
            value={form.name}
            onChange={handleNameChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>Number</label>
          <input
            className={s.formInput}
            value={form.number}
            onChange={handleNameChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={s.formButton} type="submit">
            Add contact
          </button>
        </form>
    );
  }


export default ContactForm;


