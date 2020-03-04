import React, { useState, useEffect } from 'react';
import CamerasSolContainer from './components/CamerasSolContainer.jsx';
import CameraInfoCard from './components/CameraInfoCard.jsx';


const App = () => (
  <div data-test="mainAppTest">
    <CamerasSolContainer />
    <main>
      <CameraInfoCard />
    </main>
  </div>
);

export default App;
