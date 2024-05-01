import logo from './logo.svg';
import './App.css';
import './index.css';
import AdminLogin from './components/AdminLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLogin from './Pages/UserLogin';
import AdminReg from './components/AdminReg';
import UserReg from './Pages/UserReg';
import Table from './Pages/Table';
function App() {
  return (
    <div className="App">
     <AdminLogin/>
     <Nav/>
 {/* <UserLogin/> 

      <AdminReg/> 

    <UserReg/> */}

      {/* <Table/> */}
    </div>
  );
}

export default App;
