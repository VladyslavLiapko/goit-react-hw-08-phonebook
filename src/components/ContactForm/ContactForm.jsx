import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  FormButton,
  FormContact,
  FormInput,
  FormLabel,
} from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/auth/selectors';
import { addContact } from 'redux/auth/operations';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contactData = { name, number };
    form.reset();
    if (contacts.find(contact => contact.name === name)) {
      Notify.warning(`${name} is already in contacts`);
      return false;
    }

    dispatch(addContact(contactData));
    form.reset();
  };


    return (
      <>
      <formContact  onSubmit={handleSubmit} autoComplete="off">
          <FormLabel >Name</FormLabel >
          <br/>
          <FormInput
            id="name"
           
            type="text"
            name="name"
            />
          <br/>
        
          <FormLabel >Number</FormLabel >
          <br/>
          <FormInput
            id="number"
            
            type="tel"
            name="number"
           
           />
          <br/>
        <FormButton type="submit">
          Add contact
        </FormButton>
        </formContact>
        </>
    );
}
  

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.object,
};