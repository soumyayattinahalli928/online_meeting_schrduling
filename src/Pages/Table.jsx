import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../src/Style/table.css';
import Nav  from '../Components/Nav';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Table() {
  const location = useLocation();
  const [state, setState] = useState({});

  useEffect(() => {
    let stateData = location.state;
    setState(stateData);
  }, [location.state]);

  const navigate = useNavigate();
  const handleRowClick = () => {
    navigate('/userreg');
  }

  return (
    <div className="table-container">
      <Nav/><br/>
      <h1>User Details</h1><br/><br/>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {state && (
            <tr onClick={handleRowClick}>
              <td>{state.firstName}</td>
              <td>{state.lastName}</td>
              <td>{state.phoneNumber}</td>
              <td>{state.email}</td>
              <td>{state.password}</td>
            </tr>
          )}
        </tbody>
      </table>

      <Button variant="primary" style={{marginLeft:'45%',width:'10%'}}><Link to = '/adduser' className='link'  style={{color:'white', textDecoration:'none', marginLeft:'8%'}}>Add User</Link></Button><br/><br/>
      <Button className="btn btn-primary" style={{marginLeft:'40%'}}><Link to = '/createmeeting' className='link'  style={{color:'white', textDecoration:'none'}}>Create Meeting</Link></Button>
    </div>
  );
}

export default Table;
