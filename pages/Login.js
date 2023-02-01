import React,{useState} from 'react';
import * as yup from "yup";
import {useFormik} from "formik";
import { Button, Container, Row, Form, Alert } from "react-bootstrap";
import { useStateContext } from '../context/StateContext';
import Signup from './signup';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = (props) =>{
  const router = useRouter();
    const [formState, setFormState] = useState(true);
    const {user,signup,login} = useStateContext();
    const validationSchema = yup.object({
        email: yup.string().required("Email is Required"),
        password: yup.string().required("Password is Required"),
      });
    
      const Submit = async (values) =>{
        
        try {
          await login(formik.values.email, formik.values.password)
          router.push('/')
        } catch (error) {
          console.log(error)
        }
    
      }
      

      const formik = useFormik({
        initialValues: { email: "", password: "" },
        validateOnBlur: true,
        validationSchema: validationSchema,
        onSubmit : values =>{
          Submit()
        }
      });

      

      


    return(
        <div className="Auth-form-container">
        <Form className="Auth-form" onSubmit={formik.handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="text-center">
              Not registered yet?{" "}
            
              <a className="link-primary" href='/Signup'>
                Sign Up
              </a>
              
            </div>
            <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <Form.Text className="text-danger">
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </Form.Text>
          </Form.Group>


          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <Form.Text className="text-danger">
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </Form.Text>
          </Form.Group>

            <div className="d-grid gap-2 mt-3">
              <Button type="submit" className="btn btn-primary" disabled={!formik.isValid} onClick={values => setFormState(values)}>
                Submit
              </Button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </Form>
      </div>
    )
}

export default Login;