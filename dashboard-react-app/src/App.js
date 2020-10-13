import React, { useState } from 'react';
import './App.css';
import DashboardControl from 'devexpress-dashboard-react';
import {TextBoxItemEditorExtension} from 'devexpress-dashboard/designer/text-box-item-editor-extension';

function switchMode(props) {
  return props === 'Viewer' ? "Designer" : "Viewer";
}
function onBeforeRender(e) {
  var dashboardControl = e.component;
  dashboardControl.registerExtension(new TextBoxItemEditorExtension(dashboardControl));
}

function App() {
  const [workingModeVar, setWorkingMode] = useState("Designer");
  return (
    <div style={{ position : 'absolute', top : '0px', left: '0px', right : '0px', bottom: '0px' }}>
      <button onClick={() => { setWorkingMode(switchMode(workingModeVar)) }}>Switch to {switchMode(workingModeVar)}</button>
      <DashboardControl style={{ height: '90%' }} 
        endpoint="https://localhost:5001/dashboard/api"
        workingMode={workingModeVar}
        onBeforeRender={onBeforeRender}>
      </DashboardControl>
  </div>
  );
}

export default App;