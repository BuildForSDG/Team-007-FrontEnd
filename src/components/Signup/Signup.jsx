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
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  };

  const dispatch = useDispatch();

  let loginSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
    termsAndCondition: yup.string().required()
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
                    <Field type="email" className="form-control" name="email" placeholder="Email" />
                    {errors.email && touched.email ? <div className="text-danger">{errors.email}</div> : null}
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
                  <p className="login-text">
                    {' '}
                    I already have an account &nbsp;
                    <Link to="/login">Login</Link>
                  </p>

                  <div className="form-div-checkbox">
                    <Field
                      type="checkbox"
                      className="form-control-check"
                      id="terms"
                      name="termsAndCondition"
                      placeholder="Confirm Password"
                    />
                    <label htmlFor="terms">I agree to the terms and conditions</label>
                  </div>
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
