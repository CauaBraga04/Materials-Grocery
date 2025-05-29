import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNavComponent from './Components/TopNavComponent';
import CurrentList from './Components/CurrentList';
import AllLists from './Components/AllLists';

function App() {
  return (
   <>
   <TopNavComponent></TopNavComponent>
   <Routes>
    <Route path="/" element={<CurrentList />} />
    <Route path="/current-list" element={<CurrentList />} />
    <Route path="/all-lists" element={<AllLists />} />
    </Routes>    
   </>
  );
}

export default App;
