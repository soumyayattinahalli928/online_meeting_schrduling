import logo from './logo.svg';
import './App.css';
import './index.css';
import AdminLogin from './components/AdminLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLogin from './Pages/UserLogin';
import AdminReg from './components/AdminReg';
import UserReg from './Pages/UserReg';
function App() {
  return (
    <div className="App">
     {/* <AdminLogin/>
 <UserLogin/>  */}

      <AdminReg/>

      {/* <UserReg/> */}
    </div>
  );
}

export default App;
