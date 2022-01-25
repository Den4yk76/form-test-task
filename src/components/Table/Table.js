export default function Table({ applicants, deleteContact }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>firstName</th>
          <th>lastName</th>
          <th>phone</th>
          <th>gender</th>
          <th>age</th>
          <th>DELETE</th>
        </tr>
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
