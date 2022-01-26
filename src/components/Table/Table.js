import { useState, useEffect, useMemo } from 'react';

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

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <button
                            onClick={() => {
                                requestSort('firstName');
                            }}
                        >
                            firstName
                        </button>
                    </th>
                    <th>
                        <button
                            onClick={() => {
                                requestSort('lastName');
                            }}
                        >
                            lastName
                        </button>
                    </th>
                    <th>
                        <button
                            onClick={() => {
                                requestSort('phone');
                            }}
                        >
                            phone
                        </button>
                    </th>
                    <th>
                        <button
                            onClick={() => {
                                requestSort('gender');
                            }}
                        >
                            gender
                        </button>
                    </th>
                    <th>
                        <button
                            onClick={() => {
                                requestSort('age');
                            }}
                        >
                            age
                        </button>
                    </th>
                    <th>DELETE</th>
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
