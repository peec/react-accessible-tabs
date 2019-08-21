import React, { useState } from 'react';
import './App.css';
import { Tabs, Tab, TabPanel } from './components/tabs';


function App() {
  const [tabs, setTabs] = useState([
    {
      id: 'tab1',
      label: 'Javascript',
      content: 'Great'
    },
    {
      id: 'tab2',
      label: 'Python',
      content: 'Also great.'
    },
    {
      id: 'tab3',
      label: 'C++',
      content: 'Expert'
    }
  ])
  const addTab = (e) => {
    e.preventDefault()
    setTabs([...tabs, {
      id: `tabs-${tabs.length+1}`,
      label: `Tab ${tabs.length+1}`,
      content: `Some content for tab ${tabs.length+1}`
    }])
  }
  return (
    <div>
      <Tabs initialActiveTab="tab2">
        <Tabs.Header label="Sports">
          <Tab id="tab1">Football</Tab>
          <Tab id="tab2">Basketball</Tab>
          <Tab id="tab3">Baseball</Tab>
        </Tabs.Header>
        <TabPanel id="tab1">
          Football is great.
        </TabPanel>
        <TabPanel id="tab2">
          Basketball is also great.
        </TabPanel>
        <TabPanel id="tab3">
          Basketball is also great.
        </TabPanel>
      </Tabs>

      <h2>Dynamic tabs</h2>
      <Tabs initialActiveTab="tab3">
        <Tabs.Header label="Programming languages">
          {tabs.map(tab => <Tab key={tab.id} id={tab.id}>{tab.label}</Tab>)}
        </Tabs.Header>
        {tabs.map(tab => <TabPanel key={tab.id} id={tab.id}>{tab.content}</TabPanel>)}
      </Tabs>
      <button onClick={addTab}>Add tab</button>
    </div>
  );
}

export default App;
