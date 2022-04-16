import React from "react";
import {Form} from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import "../../styles/login.css";
import {Link as LinkRouter} from "react-router-dom"
import userAction from '../../redux/actions/userAction';
import { connect } from "react-redux";
import GoogleSignIn from './googleSignIn'
import Swal from 'sweetalert2'
import Sweetalert from '../login/sweetalert'

const SignIn = (props) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: event.target[0].value,
      password: event.target[1].value,
      from: "signIn",
    }
    props.signInUser(userData)
  }


  return (
    <div className="containerSignIn">
      <h2><span className="nombreLogin">React Sports Sign In</span></h2>
        <p>¿Don't have an account? <LinkRouter to={"/signUp"} className="signUpButton">Create a new account!</LinkRouter></p>
        <div className="containerGoogle">
        <GoogleSignIn />
        </div>
      <Form className="formSignIn" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <div className="submitContainer">
        <input type="submit" className="submitButton" placeholder="Log In"/>
        </div>
      </Form>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
      user: state.userReducer.user,
      
  }
}

const mapDispatchToProps = {
  signInUser: userAction.signInUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
