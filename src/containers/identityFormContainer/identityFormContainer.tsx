import React from "react";
import axios from "axios";
import "./identityFormContainer.scss";
import { Redirect } from "react-router";

export default class IdentityRegistrationController extends React.Component {
  state = {
    phoneNumber: "",
    code: 0,
    redirect: 0
  };

  handlePhoneChange = (e: any) => {
    this.setState({ phoneNumber: e.target.value });
  };

  handleCodeChange = (e: any) => {
    this.setState({ code: e.target.value });
  };

  handleCodeSubmit = (e: any) => {
    if (e) e.preventDefault();
    axios
      .post(`http://localhost:3001/auth/verify`,{phoneNumber:this.state.phoneNumber,code:this.state.code})
      .then(response => {
        if (response.data.ok === "1") {
          localStorage.setItem("accessToken", response.data.ok);
          this.setState({ redirect: 2 });
        } else {
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  handlePhoneSubmit = (e: any) => {
    if (e) e.preventDefault();
    axios
      .post("http://localhost:3001/auth/register", { phoneNumber: this.state.phoneNumber })
      .then(response => {
        this.setState({ redirect: 1 });
      })
      .catch(err => {
        console.log(err);
      });
  };

  fillVerifyCodeForm = () => {
    return (
      <React.Fragment>
        <div id="phoneForm">
          <h4>We jest sent you an sms with Verfication code</h4>
          <p>Please enter your code number below:</p>
          <input
            type="text"
            value={this.state.code != null ? this.state.code : ""}
            onChange={this.handleCodeChange}
          />
          <input
            id="confirm"
            type="submit"
            value="Confirm"
            onClick={this.handleCodeSubmit}
          />
        </div>
      </React.Fragment>
    );
  };

  fillPhoneForm = () => {
    return (
      <React.Fragment>
        <div id="phoneForm">
          <h4>Welcome</h4>
          <p>Please enter your phone number below(using 972 country code):</p>
          <input
            value={this.state.phoneNumber}
            onChange={this.handlePhoneChange}
          />
          <input
            id="confirm"
            type="submit"
            value="Confirm"
            onClick={this.handlePhoneSubmit}
          />
        </div>
      </React.Fragment>
    );
  };

  render() {
    
    if (this.state.redirect === 0) {
      return this.fillPhoneForm();
    } else if (this.state.redirect === 1) {
      return this.fillVerifyCodeForm();
    } else if (
      this.state.redirect === 2 ||
      localStorage.getItem("accessToken") === "1"
    ) {
      return <Redirect to="/" />;
    }
  }
}
