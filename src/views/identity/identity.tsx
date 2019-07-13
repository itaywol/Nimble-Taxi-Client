import React from "react";
import "./identity.scss";
import logo from "../../resources/logo.png";
import IdentityFormController from "../../containers/identityFormContainer/identityFormContainer";

class IdentitySetup extends React.Component {

  render = () => {
    return (
      <div id="wrapper">
        <img src={logo} alt="Nimble Taxi Logo" />
        <h3>Go Fast, Go Nimble!</h3>
        <IdentityFormController />
      </div>
    );
  };
}

export default IdentitySetup;
