import React from "react";
import { Redirect, Link } from "react-router-dom";
import NimbleNav from "../../components/navbar/navbar";
import NimbleMap from "../../components/googlemap/NimbleMap";

class IndexPage extends React.Component {
  appView = () => {
    return <React.Fragment>
      <NimbleNav></NimbleNav>
      <NimbleMap></NimbleMap>
    </React.Fragment>
  }

  /* 
    checks if there is user token registered on the browser localstorage if do move to the appview if not go to identity form(phone verfication)
  
  */
  checkAuth = () => {
    if (localStorage.getItem("accessToken") === "true") {
      console.log("not logged in redirecting");
      return <Redirect to="/identity" />;
    } else if (localStorage.getItem("accessToken") === null) {
      return <Redirect to="/identity" />;
    } else {
      return this.appView();
    }
  };

  render() {
    return this.checkAuth();
  }
}

export default IndexPage;
