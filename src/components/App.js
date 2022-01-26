import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form/Form';
import Table from './Table/Table';
import './styles.css';

export default function App() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const parsedApplicatns = JSON.parse(localStorage.getItem('applicants'));
    if (parsedApplicatns) {
      setApplicants(parsedApplicatns);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('applicants', JSON.stringify(applicants));
  }, [applicants]);

  const addContact = (firstName, lastName, phone, gender, age) => {
    gender == true ? (gender = 'male') : (gender = 'female');

    setApplicants(prevState => [
      ...prevState,
      { id: uuidv4(), firstName, lastName, phone, gender, age },
    ]);
  };

  const deleteContact = e => {
    setApplicants(prevState => prevState.filter(el => el.id !== e.target.id));
  };

  return (
    <section className="info-section">
      <div className="form-container">
        <h2 className="form-heading">About you</h2>
        <Form addContact={addContact} />
      </div>
      <h2 className="table-heading">List of my friends:</h2>
      {applicants.length > 0 ? (
        <Table applicants={applicants} deleteContact={deleteContact} />
      ) : (
        <h2 className="nothing-to-show-heading">Nothing to show :(</h2>
      )}
    </section>
  );
}
