import React, { useState, useEffect } from 'react';
import CamerasSolContainer from './components/CamerasSolContainer.jsx';
import CameraInfoCard from './components/CameraInfoCard.jsx';


const App = () => {
  const [dataFetchedFromNasaApi, updateDataFetchedFromNasaApi] = useState([]);

  const fetchFromNasaRoverApi = () => {
    const apiURI = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY';

    fetch(apiURI)
      .then((response) => response.json())
      .then((data) => {
        console.log('data from NASA', data);
        updateDataFetchedFromNasaApi(data);
      });
  };

//   useEffect(() => {
//     // Update the document title using the browser API
//     console.log('--->APP HAS MOUNTED** FROM USE EFFECT');
//     fetchFromNasaRoverApi();
//     console.log('CURRENT DATA STATE', dataFetchedFromNasaApi);
//   }, [dataFetchedFromNasaApi[0]]);

  return (
    <div data-test="mainAppTest">
      <CamerasSolContainer />
      <main>
        <CameraInfoCard />
      </main>
    </div>
  );
};

export default App;
