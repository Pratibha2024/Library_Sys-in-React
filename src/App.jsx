import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div> 
       <Home/>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
