import { useState } from 'react';
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
            <h2 className="form-heading">
                <span className="stroke">About</span> you
            </h2>
            <label className="label" htmlFor="first-name">
                <span className="stroke">First </span> name:
            </label>
            <input
                className="form-input form-input--validation"
                type="text"
                id="first-name"
                name="first-name"
                value={firstName}
                pattern="^[a-zA-Zа-яА-ЯіІёЁ\s\\'-]{3,30}$"
                placeholder="Type your first name"
                title="The name can only contain letters, an apostrophe, a dash, and spaces and 3 to 30 characters long. For example Adrian, Jacob Mercer etc."
                required
                onChange={e => {
                    setFirstName(e.target.value);
                }}
            />
            <label className="label" htmlFor="last-name">
                <span className="stroke">Last </span> name:
            </label>
            <input
                className="form-input form-input--validation"
                type="text"
                id="last-name"
                name="last-name"
                value={lastName}
                placeholder="Type your last name"
                pattern="^[a-zA-Zа-яА-ЯіІёЁ\s\\'-]{3,30}$"
                title="The name can only contain letters, an apostrophe, a dash, and spaces and 3 to 30 characters long. For example Adrian, Jacob Mercer etc."
                required
                onChange={e => {
                    setLastName(e.target.value);
                }}
            />
            <label className="label" htmlFor="phone">
                <span className="stroke">P</span>hone:
            </label>
            <input
                className="form-input form-input--validation"
                type="tel"
                name="phone"
                pattern="^([+]{1})[0-9]{9,15}$"
                title="Phone number must start with +, be between 9 and 15 digits long and not contain spaces"
                placeholder="Type your phone"
                id="phone"
                value={phone}
                required
                onChange={e => {
                    setPhone(e.target.value);
                }}
            />
            <label className="label" htmlFor="label-group">
                <span className="stroke">G</span>ender:
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
                    <label className="gender-label" htmlFor="gender_male">
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
                    <label className="gender-label" htmlFor="gender_female">
                        Female
                    </label>
                </div>
            </label>
            <label className="label" htmlFor="age">
                <span className="stroke">A</span>ge:
            </label>
            <input
                className="form-input form-input--validation"
                type="text"
                id="age"
                name="age"
                pattern="^(0?[1-9]|[1-9][0-9])$"
                title="You must be from 1 to 99 y.o."
                placeholder="Type your age"
                value={age}
                required
                onChange={e => {
                    setAge(e.target.value);
                }}
            />
            <button className="form-button" type="submit" value="Submit">
                <span className="stroke">Add</span> friend
            </button>
        </form>
    );
}
