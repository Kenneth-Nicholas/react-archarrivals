import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import stlskyline2 from '../../images/stlskyline2.png'

class SignUp extends Component {

  state = {
    firstName: '',
    lastName: '',
    age: '',
    telephone: '',
    email: '',
    password: ''
  }

  signUpSubmitHandler = (event) =>
  {
    event.preventDefault();
    const student = {
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      age:this.state.age,
      telephone:this.state.telephone,
      email:this.state.email,
      password:this.state.password
    }
    axios.post("http://localhost:8080/submitStudentDetails", student)
    .then( (response) => {
      this.props.history.push('/thank-you');
    })
  }

  signUpChangeHandler = (event)=>   
  {
      const name = event.target.name;
      const value = event.target.value;
      this.setState( {
          [name]:event.target.value
      })

  }

  render() {
    return (

      <React.Fragment>
      
      <div id="signupbackground">
        
        <img id="stlskyline" src={stlskyline2} style={{ width: '100%'}} alt=""/> 
        <div id="signintext">
          <h2 className="looking"><em>Looking for something to do? Check out Arch Arrivals to find events happening in the St. Louis area!</em></h2>
        </div>
      </div>


      <form onSubmit={this.signUpSubmitHandler} className="container" id="container">

        <h3>Create an Arch Arrivals Account Below!</h3>

        <div className="form-row">
          <div className="col">
            <input onChange ={this.signUpChangeHandler} value={this.state.firstName} name="firstName" type="text" className="form-control" placeholder="First name" />
          </div>
          <div className="col">
            <input onChange ={this.signUpChangeHandler} value={this.state.lastName} name="lastName" type="text" className="form-control" placeholder="Last name" />
          </div>
        </div>

        <div className="form-row">
          <div className="col">
            <input onChange ={this.signUpChangeHandler} value={this.state.age} name="age" type="text" className="form-control" placeholder="Age" />
          </div>
          <div className="col">
            <input onChange ={this.signUpChangeHandler} value={this.state.telephone} name="telephone" type="text" className="form-control" placeholder="Telephone" />
          </div>
        </div>

        <div className="form-row">
          <div className="col">
            <input onChange ={this.signUpChangeHandler} value={this.state.email} name="email" type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="col">
            <input onChange ={this.signUpChangeHandler} value={this.state.password} name="password" type="password" className="form-control" placeholder="Password" />
          </div>
        </div>

        <button id="buttontext3" className="nav-bar-button-custom btn btn-outline-success my-2 my-sm-0" type="submit">Sign Up</button>

      </form>

      </React.Fragment>

    );
  }
}

export default SignUp;