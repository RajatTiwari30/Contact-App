import React from 'react';
import ContactCard from './ContactCard';

const ContactList= (props) =>{
    const deleteContactHandler=(id)=>{
        props.getContactID(id);
    };
    const renderContact= props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
        );
    });
    return(
        <div className="ui celled list">
            {renderContact}
        </div>
    );
}

export default ContactList;