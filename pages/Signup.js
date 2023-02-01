import React,{useState} from 'react';
import * as yup from "yup";
import { useAlert } from "react-alert";
import {useFormik} from "formik";
import { Button, Container, Row, Form, Alert } from "react-bootstrap";
import { useRouter } from 'next/router';
import { useStateContext } from '../context/StateContext';

const Signup = (props) =>{
  //  const alert =useAlert();
  const router = useRouter();
    const [formState, setFormState] = useState(true);
    const {user,signup} = useStateContext();
    console.log(user);
    const Password_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
  const validationSchema =  yup.object({
    // firstName: yup.string()
    //   .max(15, "Must be 15 characters or less")
    //   .required("Required"),
    // lastName: yup.string()
    //   .max(20, "Must be 20 characters or less")
    //   .required("Required"),
      password: yup.string().matches(Password_REGEX,"Your password need to consist of numbers and special charecters").required("Password is Required"),
    email: yup.string()
      .email("Invalid email address")
      .required("Required")
  })

    const formik = useFormik({
      validateOnBlur: true,
    initialValues: {
      // firstName: "",
      // lastName: "",
      password:"",
      email: ""
    },
    validationSchema: validationSchema,
   onSubmit: values =>{
  //  alert(console.log(JSON.stringify(values, null, 2)))
    Submit();
   }
  });

  const Submit =  () =>{
        
    try {
       signup(formik.values.email, formik.values.password)
      //alert("SUCCESS")
    } catch (error) {
      console.log("signup",error)
    }
    
  }
    return(
        <div className="Auth-form-container">
          
        <Form className="Auth-form" onSubmit={formik.handleSubmit   }>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={() => router.push("/Login") }>
                Sign In
              </span>
            </div>
            
            {/* <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              placeholder="e.g Jane"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            <Form.Text className="text-danger">
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-danger">{formik.errors.firstName}</div>
              ) : null}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            <Form.Text className="text-danger">
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-danger">{formik.errors.lastName}</div>
              ) : null}
            </Form.Text>
          </Form.Group> */}

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
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
              placeholder="e.g Jane@123"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <Form.Text className="text-danger">
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </Form.Text>
            <Button type="submit" className="btn btn-primary"   onClick={values => setFormState(values)}>
                Register
              </Button>
          </Form.Group>
            
          </div>
        </Form>
      </div>
    )
}

export default Signup;