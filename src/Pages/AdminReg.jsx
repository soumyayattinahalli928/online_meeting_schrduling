import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import '../../src/Style/adminreg.css';
import Nav  from '../Components/Nav';

function FormExample() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phonenumber: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phonenumber: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });

  return (
   <>
   <Nav/><br/>
       <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
      initialValues={{
        firstName: '',
        lastName: '',
        phonenumber: '',
        email: '',
        password: '',
      }}
    >
      {({ handleSubmit, values, touched, errors }) => (
        <>
          <h1>Admin Registration</h1>
          <br />
          <div className='adreg'>
            <div className='form'>
              <Form noValidate onSubmit={handleSubmit}>
                <Row className='mb-1'>
                  <Form.Group as={Col} md='9' controlId='validationFormik01'>
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      className='userinput'
                      type='text'
                      name='firstName'
                      placeholder='First name'
                      value={formData.firstName}
                      onChange={handleChange}
                      isInvalid={touched.firstName && !!errors.firstName}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className='mb-1'>
                  <Form.Group as={Col} md='9' controlId='validationFormik02'>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type='text'
                      name='lastName'
                      placeholder='Last name'
                      value={formData.lastName}
                      onChange={handleChange}
                      isInvalid={touched.lastName && !!errors.lastName}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className='mb-1'>
                  <Form.Group
                    as={Col}
                    md='9'
                    controlId='validationFormikUsername'
                  >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Phone number'
                      name='phonenumber'
                      value={formData.phonenumber}
                      onChange={handleChange}
                      isInvalid={touched.phonenumber && !!errors.phonenumber}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.phonenumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className='mb-1'>
                  <Form.Group as={Col} md='9' controlId='validationFormik03'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={touched.email && !!errors.email}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} md='9' controlId='validationFormik04'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Password'
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                      isInvalid={touched.password && !!errors.password}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <br />
                <Button type='submit'> Submit </Button>
              </Form>
            </div>
          </div>
        </>
      )}
    </Formik>
   </>
  );
}

export default FormExample;
