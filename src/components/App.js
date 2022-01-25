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
      <h2>About you</h2>
      <Form addContact={addContact} />
      <h2>Add a new item to the table:</h2>
      <Table applicants={applicants} deleteContact={deleteContact} />
    </section>
  );
}
