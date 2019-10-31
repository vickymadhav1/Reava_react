import React from 'react';
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import Header from './pages/Header';
import Dashboard from './pages/Dashboard';
import CandidateSearch from './pages/CandidateSearch';
import RequireterMainPage from './pages/RequireterMainPage';
import candidate_complete_profile from './pages/candidate_complete_profile';
import PanellistDashboard from './pages/PanellistDashboard'
import RecruiterIntelligentSearch from './pages/RecruiterIntelligentSearch'
import HiredcandidateDashboard from './pages/HiredcandidateDashboard'

import './App.css';

function App(){
  return(
    <BrowserRouter>
    <div >
      <Header />
      <Switch>
      <Route path="/" exact component={CandidateSearch} />
      <Route path="/Dashboard"  component={Dashboard} />
      <Route path="/RequireterMainPage"  component={RequireterMainPage} />
      <Route path="/candidate_complete_profile"  component={candidate_complete_profile} />
      <Route path="/panelList" component={PanellistDashboard} />
      <Route path="/recruiter" component={RecruiterIntelligentSearch} />
      <Route path="/hiredcandidates" component={HiredcandidateDashboard} />
    </Switch>
 </div>
    </BrowserRouter>
  )
}
export default App;
