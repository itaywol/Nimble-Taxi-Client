import React from "react";
import axios from "axios";
import "./identityFormContainer.scss";
import { Redirect } from "react-router";
export default class IdentityRegistrationController extends React.Component {
  state = {
    phoneNumber: "",
    redirect: false
  };

  handlePhoneChange = (e: any) => {
    this.setState({ phoneNumber: e.target.value });
  };
  
  handlePhoneSubmit = (e: any) => {
    if (e) e.preventDefault();
    axios
      .post("/phone", { phoneNumber: this.state.phoneNumber })
      .then(response => {
        let result = JSON.stringify(response.data);
        result = result.slice(1, result.length - 1);
        localStorage.setItem(result.split(":")[0], result.split(":")[1]);
        this.setState({ redirect: true });
      })
      .catch(err => {
        console.log(err);
      });
  };

  fillPhoneForm = () => {
    return (
      <React.Fragment>
        <div id="phoneForm">
          <h4>Welcome</h4>
          <p>Please enter your phone number below:</p>
          <input
            type="text"
            value={this.state.phoneNumber != null ? this.state.phoneNumber : ""}
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
    if (this.state.redirect === false) {
      return this.fillPhoneForm();
    } else {
      return <Redirect to="/" />;
    }
  }
}
