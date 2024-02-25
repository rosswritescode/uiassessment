import React, { useState } from 'react';

const initialContacts = new Array(1000).fill(null).map((_, index) => ({
  id: index,
  name: `Contact ${index}`,
  email: `contact${index}@example.com`,
}));

function ContactList() {
  const [contacts, setContacts] = useState(initialContacts);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedId, setHighlightedId] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleHighlight = (id) => {
    setHighlightedId(id);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search contacts..."
      />
      <ul style={{ maxHeight: '400px', overflowY: 'scroll' }}>
        {filteredContacts.map((contact) => (
          <li
            key={contact.id}
            style={{ backgroundColor: highlightedId === contact.id ? 'yellow' : 'transparent' }}
            onClick={() => handleHighlight(contact.id)}
          >
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
