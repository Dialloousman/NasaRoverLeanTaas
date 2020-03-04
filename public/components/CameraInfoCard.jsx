import React, { useState, useEffect } from 'react';


const CameraInfoCard = () => (
  <div className="CameraInfoCard" data-test="CameraInfoCardComponent">
    <h3>
      Front Hazard Avoidance Camera
    </h3>
    <p>
      Photos: 4
    </p>
    <img src="https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg" />
  </div>
);

export default CameraInfoCard;
