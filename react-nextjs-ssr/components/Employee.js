class Employee extends React.Component {

  state = {
    currency: 'USD'
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.employees.map((emp, i) => <li className="list-group-item" 
          key={i}>ID: {emp.id} | Employee Name: {emp.employee_name} | Employee Salary: {emp.employee_salary} | Employee Age: {emp.employee_age} </li>)}
        </ul>
        <br/>
      
      </div>
    );
  }
}

export default Employee;
