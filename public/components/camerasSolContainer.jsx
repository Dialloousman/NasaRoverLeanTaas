import React, { useState, useEffect } from 'react';
import DropDownOptions from './DropDownOptions.jsx';

const CamerasSolContainer = () => {
  const dropDownOpenAndClose = () => {
    document.getElementById('myDropdown').classList.toggle('show');
  };
  return (
    <div id="camerasSolContainer" data-test="CameraSolComponent">
      <div>
        <li>Sol</li>
        <div className="dropdown">
          <button onClick={() => dropDownOpenAndClose()} type="button" className="dropbtn">4 Selected</button>
          <DropDownOptions />
        </div>
      </div>
      <div>
        <li>Cameras</li>
        <button type="button">7 Selected</button>
      </div>
    </div>
  );
};

export default CamerasSolContainer;
