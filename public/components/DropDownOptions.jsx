import React, { useState, useEffect } from 'react';

const DropDownOptions = () => (
  <div id="myDropdown" className="dropdown-content">
    <label>
      <input type="checkbox" value="option1" />
      Camera 1
    </label>
    <label>
      <input type="checkbox" value="option1" />
      Camera 2
    </label>
    <label>
      <input type="checkbox" value="option1" />
      Camera 3
    </label>
    <label>
      <input type="checkbox" value="option1" />
      Camera 4
    </label>
  </div>
);

export default DropDownOptions;
