import React, { useState, useEffect } from 'react';
import CamerasSolContainer from './components/CamerasSolContainer.jsx';
import CameraInfoCard from './components/CameraInfoCard.jsx';


const App = () => (
  <div>
    <CamerasSolContainer />
    Main Containter
    <CameraInfoCard />
  </div>
);

export default App;
