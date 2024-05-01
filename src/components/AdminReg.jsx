
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import '../../src/Pages/adminreg.css';



const AdminReg = () => {
    const { Formik } = formik;

    const schema = yup.object().shape({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      phonenumber: yup.string().required(),
      email: yup.string().required(),
      password: yup.string().required(),
    
      terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });
  
  return (
    <Formik
    validationSchema={schema}
    onSubmit={console.log}
    initialValues={{
      firstName: '',
      lastName: '',
      phonenumber: '',
      email: '',
      password: '',
      
      terms: false,
    }}
  >
    {({ handleSubmit, handleChange, values, touched, errors }) => (
   <>
          <h1>Admin Registration</h1><br/>
         <div className='adreg'>
      
        <div className='form'>
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-1">
            <Form.Group as={Col} md="9" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control className='userinput'
                type="text"
                name="firstName"
                placeholder="firstName"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row className="mb-1">
            <Form.Group as={Col} md="9" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="lastName"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />

                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row className="mb-1">
            <Form.Group as={Col} md="9" controlId="validationFormikUsername">
              <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="phonenumber"
                  aria-describedby="inputGroupPrepend"
                  name="phonenumber"
                  value={values.phonenumber}
                  onChange={handleChange}
                  isInvalid={!!errors.phonenumber}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phonenumber}
                </Form.Control.Feedback>
            
            </Form.Group>
          </Row>
          <Row className="mb-1">
            <Form.Group as={Col} md="9" controlId="validationFormik03">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                name="city"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />

              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row>
            <Form.Group as={Col} md="9" controlId="validationFormik04">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
          
          </Row><br/>
        
          <Button type="submit">Submit form</Button>
        </Form>
        </div>
    </div>
   </>
    )}
    </Formik>
  );
}
export default AdminReg