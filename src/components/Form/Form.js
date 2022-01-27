import { useState, useEffect } from 'react';
import './index.css';

export default function Form({ addContact }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');

    const resetFields = () => {
        setFirstName('');
        setLastName('');
        setPhone('');
        setGender('');
        setAge('');
        document.getElementById('gender_male').checked = false;
        document.getElementById('gender_female').checked = false;
    };

    const onSubmit = e => {
        e.preventDefault();
        addContact(firstName, lastName, phone, gender, age);
        resetFields();
    };

    return (
        <form onSubmit={onSubmit}>
            <label className="label" htmlFor="first-name">
                First Name:
            </label>
            <input
                className="form-input form-input--validation"
                type="text"
                id="first-name"
                name="first-name"
                value={firstName}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                placeholder="Type your first name"
                title="The name can only contain letters, an apostrophe, a dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
                required
                onChange={e => {
                    setFirstName(e.target.value);
                }}
            />
            <label className="label" htmlFor="last-name">
                Last name:
            </label>
            <input
                className="form-input form-input--validation"
                type="text"
                id="last-name"
                name="last-name"
                value={lastName}
                placeholder="Type your last name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="The name can only contain letters, an apostrophe, a dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
                required
                onChange={e => {
                    setLastName(e.target.value);
                }}
            />
            <label className="label" htmlFor="phone">
                Phone:
            </label>
            <input
                className="form-input form-input--validation"
                type="tel"
                name="phone"
                placeholder="Type your phone"
                id="phone"
                value={phone}
                required
                onChange={e => {
                    setPhone(e.target.value);
                }}
            />
            <label className="label" htmlFor="label-group">
                Gender:
                <div id="label-group">
                    <input
                        className="gender-input"
                        required
                        type="radio"
                        name="gender"
                        id="gender_male"
                        value="1"
                        onChange={e => {
                            setGender(e.target.value);
                        }}
                    />
                    <label className="gender-label" htmlFor="gender">
                        Male
                    </label>
                    <input
                        className="gender-input"
                        required
                        type="radio"
                        name="gender"
                        id="gender_female"
                        value="0"
                        onChange={e => {
                            setGender(e.target.value);
                        }}
                    />
                    <label className="gender-label" htmlFor="gender">
                        Female
                    </label>
                </div>
            </label>
            <label className="label" htmlFor="age">
                Age:
            </label>
            <input
                className="form-input form-input--validation"
                type="text"
                id="age"
                name="age"
                placeholder="Type your age"
                value={age}
                required
                onChange={e => {
                    setAge(e.target.value);
                }}
            />
            <button className="form-button" type="submit" value="Submit">
                Add friend
            </button>
        </form>
    );
}
