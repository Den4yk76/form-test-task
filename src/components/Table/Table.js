import { useState, useMemo } from 'react';
import './index.css';

export default function Table({ applicants, deleteContact }) {
    const [sortConfig, setSortConfig] = useState({
        sortField: null,
        direction: null,
    });

    useMemo(() => {
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
        return sortedApplicants;
    }, [applicants, sortConfig]);

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
            <thead>
                <tr>
                    <th>
                        <button
                            className={
                                'table-head-btn table-head-btn--first ' +
                                getClassNamesFor('firstName')
                            }
                            onClick={() => {
                                requestSort('firstName');
                            }}
                        >
                            <span className="stroke stroke--table">First</span>
                            name
                        </button>
                    </th>
                    <th>
                        <button
                            className={
                                'table-head-btn ' + getClassNamesFor('lastName')
                            }
                            onClick={() => {
                                requestSort('lastName');
                            }}
                        >
                            <span className="stroke stroke--table">Last</span>
                            name
                        </button>
                    </th>
                    <th>
                        <button
                            className={
                                'table-head-btn ' + getClassNamesFor('phone')
                            }
                            onClick={() => {
                                requestSort('phone');
                            }}
                        >
                            <span className="stroke">P</span>hone
                        </button>
                    </th>
                    <th>
                        <button
                            className={
                                'table-head-btn ' + getClassNamesFor('gender')
                            }
                            onClick={() => {
                                requestSort('gender');
                            }}
                        >
                            <span className="stroke">G</span>ender
                        </button>
                    </th>
                    <th>
                        <button
                            className={
                                'table-head-btn ' + getClassNamesFor('age')
                            }
                            onClick={() => {
                                requestSort('age');
                            }}
                        >
                            <span className="stroke">A</span>ge
                        </button>
                    </th>
                    <th>
                        <span className="stroke">D</span>eletion
                    </th>
                </tr>
            </thead>
            <tbody>
                {applicants.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.phone}</td>
                            <td>{item.gender}</td>
                            <td>{item.age}</td>
                            <td>
                                <button
                                    className="table-body-button"
                                    type="button"
                                    id={item.id}
                                    onClick={deleteContact}
                                ></button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
