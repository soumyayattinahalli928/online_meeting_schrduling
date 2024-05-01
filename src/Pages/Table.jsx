import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

function Table() {
  const location = useLocation()
  const [state, useLocationState] = useState(FormData)

  useEffect (()=>{
    let state = location.state
    .setLocationState(state)
  }, [location.state])
  return (
    <div className="table-container">
      <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name </th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {state && (
                    <tr>
                    <td>{state.firstName}</td>
                    <td>{state.lastName}</td>
                    <td>{state.phonenumber}</td>
                    <td>{state.email}</td>
                    <td>{state.password}</td>
                  </tr>
            )}
           
          </tbody>
        </table>
      </div>
   
  );
}
export default Table