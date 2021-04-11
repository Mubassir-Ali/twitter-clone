import React from 'react'
import './App.css';
import Feeds from './components/feeds/Feed';
import Sidebar from './components/sidebar/Sidebar';
import Widgets from './components/widgets/Widgets';

function App() {
  return (
    <div className="app">
    <Sidebar/>
    <Feeds/>
    <Widgets/>
     
    </div>
  );
}

export default App;
