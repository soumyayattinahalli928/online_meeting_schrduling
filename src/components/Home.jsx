import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    
    
    <div className='container'>
        <div className='heading'>
        <h1>WELCOME</h1>
        <div className='nexus'>
        <h1>Nexus Meet</h1>
        </div>
        </div>
    <div className="myDiv">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./home.png" />

      <Card.Body>
        <Button variant="primary" className="btn">Admin</Button>
        <Button variant="primary">User</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default Home;