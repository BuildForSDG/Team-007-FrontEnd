import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

import './login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';

const Login = () => {
  const initialValues = {
    email: '',
    password: ''
  };

  const dispatch = useDispatch();

  let loginSchema = yup.object().shape({
    email: yup.string().email(),
    password: yup.string()
  });

  const handleSubmit = (data) => {
    dispatch(loginUser(data));
  };
  return (
    <>
      <div className="form-wrapper">
        <h2 className="welcome-text">Welcome to FarmReach</h2>
        <div className="form-container">
          <p>
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
                    <span>
                      <i className="fas fa-user login-icon"></i>
                    </span>
                    <Field type="email" className="form-control" id="email" name="email" placeholder="Email" />
                    {errors.email && touched.email ? <div className="text-danger">{errors.email}</div> : null}
                  </div>
                  <div className="form-div">
                    <span>
                      <i className="fas fa-lock login-icon"></i>
                    </span>
                    <Field
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                    {errors.password && touched.password ? <div className="text-danger">{errors.password}</div> : null}
                  </div>
                  <p className="forgot-password">
                    <Link to="/">Forgot Password</Link>
                  </p>

                  <button type="submit" className="login-btn">
                    Login
                  </button>

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
