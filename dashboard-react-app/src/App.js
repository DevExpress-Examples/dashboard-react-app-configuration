import React, { useState } from 'react';
import './App.css';
import DashboardControl from 'devexpress-dashboard-react';
import {TextBoxItemEditorExtension} from 'devexpress-dashboard/designer/text-box-item-editor-extension';
import SelectBox from 'devextreme-react/select-box';
import Button from 'devextreme-react/button';

const store = [
  {"id": "dashboard1", "name": "Sample Dashboard"},
  {"id": "dashboard2", "name": "Second Dashboard"},
];

function switchMode(props) {
  return props === 'Viewer' ? "Designer" : "Viewer";
}

function onBeforeRender(e) {
  var dashboardControl = e.component;
  dashboardControl.registerExtension(new TextBoxItemEditorExtension(dashboardControl));
}

function App() {
  const [dashboardId, setDashboardId] = useState(store[2]);
  const [workingModeVar, setWorkingMode] = useState("Designer");
  return (
    <div style={{ position : 'absolute', top : '0px', left: '0px', right : '0px', bottom: '0px' }}>
      <Button onClick={() => { setWorkingMode(switchMode(workingModeVar)) }}>Switch to {switchMode(workingModeVar)}</Button>
      <SelectBox
        dataSource={store}
        value={ dashboardId }
        valueExpr='id'
        displayExpr='name'
        onValueChanged={ (e) => setDashboardId(e.value) }
      ></SelectBox>
      <DashboardControl style={{ height: '90%' }} 
        endpoint="https://localhost:5001/dashboard/api"
        workingMode={workingModeVar}
        dashboardId = {dashboardId}
        onBeforeRender={onBeforeRender}
        onOptionChanged = { e => { if(e.name === 'dashboardId') { setDashboardId(e.value) } } }
        >
      </DashboardControl>
  </div>
  );
}

export default App;