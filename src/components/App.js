import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts=[
    {
      id: "1",
      name: "Rajat",
      email: "tiwari.rajat1098@gmail.com"
    },
    {
      id: "2",
      name: "Tiwari",
      email: "rajat.tiwari1098@gmail.com"
    }
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
