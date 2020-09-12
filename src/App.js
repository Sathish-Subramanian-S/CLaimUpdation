import React from 'react';
// import './App.css';
import Login from './Login';
import Summary from './Summary';
import UpdatePage from './UpdatePage';
import ClaimsList from './ClaimsList';
// import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container mt-2">
          <div className="row">
            <div className="col-10">
              <Route path="/" component={Login} exact />
              <Route path="/summary" component={ClaimsList} />
              <Route path="/updateClaimSummary" component={UpdatePage} />
            </div>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App;
