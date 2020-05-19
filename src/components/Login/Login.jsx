import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

import './login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';

const Login = () => {
  const initialValues = {
    emailAddress: '',
    password: ''
  };

  const dispatch = useDispatch();

  let loginSchema = yup.object().shape({
    emailAddress: yup.string().email('Login with a valid email'),
    password: yup.string()
  });

  const handleSubmit = (data) => {
    dispatch(loginUser(data));
  };
  return (
    <>
      <div className="form-wrapper">
        <h2 className="welcome-text">Welcome to FarmReach</h2>
        <br />
        <div className="form-container">
          <br />
          <p className="login-text">
            <strong>Login</strong>
          </p>
          <div className="form">
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
                    <Field type="email" className="form-control" id="email" name="emailAddress" placeholder="Email" />
                    <i className="fas fa-user login-icon"></i>
                    {errors.email && touched.emailAddress ? (
                      <div className="text-danger">{errors.emailAddress}</div>
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
                    <i className="fas fa-lock login-icon"></i>
                    {errors.password && touched.password ? <div className="text-danger">{errors.password}</div> : null}
                  </div>
                  <p className="forgot-password">
                    <Link to="/">Forgot Password</Link>
                  </p>

                  <div className="form-div">
                    <button type="submit" className="login-btn">
                      Login
                    </button>
                  </div>

                  <br />
                  <p>
                    {' '}
                    I dont have an account yet &nbsp;
                    <Link to="/signup" className="signup-link text-center">
                      Create Account
                    </Link>{' '}
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
