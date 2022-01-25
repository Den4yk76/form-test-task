import { useState, useEffect } from 'react';
import './index.css';

export default function Form({ addContact }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [checked, setChecked] = useState(false);

  const resetFields = () => {
    setFirstName('');
    setLastName('');
    setPhone('');
    setGender(null);
    setAge('');
    setChecked(false);
  };

  const onSubmit = e => {
    e.preventDefault();
    addContact(firstName, lastName, phone, gender, age);
    resetFields();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-container">
        <label className="label">
          First Name:
          <input
            type="text"
            name="first-name"
            value={firstName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only contain letters, an apostrophe, a dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
            required
            onChange={e => {
              setFirstName(e.target.value);
            }}
          />
        </label>
        <label className="label">
          Last name:
          <input
            type="text"
            name="last-name"
            value={lastName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only contain letters, an apostrophe, a dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
            required
            onChange={e => {
              setLastName(e.target.value);
            }}
          />
        </label>
        <label className="label">
          Phone:
          <input
            type="tel"
            name="phone"
            value={phone}
            required
            onChange={e => {
              setPhone(e.target.value);
            }}
          />
        </label>
        <label className="label" required>
          Gender:
          <input
            type="radio"
            name="gender"
            value="male"
            required
            onChange={e => {
              setGender(e.target.value);
            }}
          />
          male
          <input
            type="radio"
            name="gender"
            value="female"
            required
            onChange={e => {
              setGender(e.target.value);
            }}
          />
          female
        </label>
        <label className="label">
          Age:
          <input
            type="text"
            name="age"
            value={age}
            required
            onChange={e => {
              setAge(e.target.value);
            }}
          />
        </label>
      </div>
      <button type="submit" value="Submit">
        Add Item
      </button>
    </form>
  );
}
