import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import indexPage from "../index/index"
import identitySetup from "../identity/identity";


const App: React.FC = () => {

  return (
    <Router>
      <Route path="/" exact component={indexPage} />
      <Route path="/identity" component={identitySetup} />
    </Router>
    
  );
}

export default App;
