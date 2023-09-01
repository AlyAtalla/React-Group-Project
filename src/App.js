import React from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import NavigationBar from './components/navigation-bar';
import Rocket from './components/Rocket';
import Mission from './components/Missions';
import MyProfile from './components/profile';

import { getMissions } from './redux/missions/missionSlice';
import { fetchRockets } from './redux/Rocket/rocketSlice';

function App() {
  const Url = 'https://api.spacexdata.com/v4/rockets';
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get(Url)
      .then((res) => {
        dispatch(getMissions(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);
  React.useEffect(() => {
    axios
      .get(Url)
      .then((respond) => {
        dispatch(fetchRockets(respond.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
