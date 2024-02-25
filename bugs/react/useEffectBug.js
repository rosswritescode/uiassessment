import React, { useState, useEffect } from 'react';

function DynamicForm() {
  const [formType, setFormType] = useState('contact'); // Possible values: 'contact', 'feedback'
  const [fields, setFields] = useState([]);

  useEffect(() => {
    let newFields;
    if (formType === 'contact') {
      newFields = ['Name', 'Email', 'Message'];
    } else if (formType === 'feedback') {
      newFields = ['Username', 'Rating', 'Comments'];
    }
    setFields(newFields); // Setting state based on formType

  }, [fields]);

  return (
    <div>
      <select value={formType} onChange={(e) => setFormType(e.target.value)}>
        <option value="contact">Contact</option>
        <option value="feedback">Feedback</option>
      </select>
      <form>
        {fields.map((field, index) => (
          <div key={index}>
            <label>{field}</label>
            <input type="text" />
          </div>
        ))}
      </form>
    </div>
  );
}

export default DynamicForm;
