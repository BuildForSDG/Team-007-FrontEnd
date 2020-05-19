import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

import './signup.scss';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../redux/actions/userActions';

const SignUp = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  };

  const dispatch = useDispatch();

  let loginSchema = yup.object().shape({
    firstName: yup.string().required('This is a required field'),
    lastName: yup.string().required('This is a required field'),
    phoneNumber: yup.string().required('This is a required field'),
    emailAddress: yup.string().email().required('This is a required field'),
    password: yup.string().required('This is a required field'),
    confirmPassword: yup.string().required()
    // termsAndCondition: yup.string().required()
  });

  const handleSubmit = (data) => {
    dispatch(signUpUser(data));
  };
  return (
    <>
      <div className="signup-form-wrapper">
        <h2 className="welcome-text">Welcome to FarmReach</h2>
        <div className="form-container">
          <p>
            <strong>Let's Get Started</strong>
          </p>
          <br />
          <div className="signup-form">
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              validateOnChange={true}
              validateOnBlur={true}
              onSubmit={(data) => {
                handleSubmit(data);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="form-div">
                    <Field type="text" className="form-control" name="firstName" placeholder="First Name" />
                    {errors.firstName && touched.firstName ? (
                      <div className="text-danger">{errors.firstName}</div>
                    ) : null}
                  </div>
                  <div className="form-div">
                    <Field type="text" className="form-control" name="lastName" placeholder="Last Name" />
                    {errors.lastName && touched.lastName ? <div className="text-danger">{errors.lastName}</div> : null}
                  </div>
                  <div className="form-div">
                    <Field type="email" className="form-control" name="emailAddress" placeholder="Email" />
                    {errors.emailAddress && touched.emailAddress ? (
                      <div className="text-danger">{errors.emailAddress}</div>
                    ) : null}
                  </div>
                  <div className="form-div">
                    <Field type="tel" className="form-control" name="phoneNumber" placeholder="Phone Number" />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <div className="text-danger">{errors.phoneNumber}</div>
                    ) : null}
                  </div>

                  <div className="form-div">
                    <Field
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                    {errors.password && touched.password ? <div className="text-danger">{errors.password}</div> : null}
                  </div>

                  <div className="form-div">
                    <Field
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                    />
                  </div>

                  <button type="submit" className="signup-btn">
                    SIGN UP
                  </button>
                  <br />
                  <p className="login-text">
                    {' '}
                    I already have an account &nbsp;
                    <Link to="/login">Login</Link>
                  </p>

                  {/* <div className="form-div-checkbox">
                    <Field
                      type="checkbox"
                      className="form-control-check"
                      id="terms"
                      name="termsAndCondition"
                      placeholder="Confirm Password"
                    />
                    <label htmlFor="terms">I agree to the terms and conditions</label>
                  </div> */}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
