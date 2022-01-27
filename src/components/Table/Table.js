import { useState, useEffect, useMemo } from 'react';
import './index.css';

export default function Table({ applicants, deleteContact }) {
  const [sortConfig, setSortConfig] = useState({
    sortField: null,
    direction: null,
  });

  let sortedApplicants = [...applicants];

  if (sortConfig.sortField !== null) {
    sortedApplicants.sort((a, b) => {
      if (a[sortConfig.sortField] < b[sortConfig.sortField]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.sortField] > b[sortConfig.sortField]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }

  const requestSort = sortField => {
    let direction = 'ascending';
    if (
      sortConfig.sortField === sortField &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ sortField, direction });
  };

  const getClassNamesFor = name => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.sortField === name ? sortConfig.direction : '';
  };

  return (
    <table className="table">
      <thead className="table-head">
        <tr className="table-head">
          <th className="table-head">
            <button
              className={'table-head-btn ' + getClassNamesFor('firstName')}
              onClick={() => {
                requestSort('firstName');
              }}
            >
              First name
            </button>
          </th>
          <th>
            <button
              className={'table-head-btn ' + getClassNamesFor('lastName')}
              onClick={() => {
                requestSort('lastName');
              }}
            >
              Last name
            </button>
          </th>
          <th>
            <button
              className={'table-head-btn ' + getClassNamesFor('phone')}
              onClick={() => {
                requestSort('phone');
              }}
            >
              Phone
            </button>
          </th>
          <th>
            <button
              className={'table-head-btn ' + getClassNamesFor('gender')}
              onClick={() => {
                requestSort('gender');
              }}
            >
              Gender
            </button>
          </th>
          <th>
            <button
              className={'table-head-btn ' + getClassNamesFor('age')}
              onClick={() => {
                requestSort('age');
              }}
            >
              Age
            </button>
          </th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {sortedApplicants.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.phone}</td>
              <td>{item.gender}</td>
              <td>{item.age}</td>
              <td>
                <button
                  className="button"
                  type="button"
                  id={item.id}
                  onClick={deleteContact}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
