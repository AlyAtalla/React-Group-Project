import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import NavigationBar from './components/navigation-bar';
import Rocket from './components/Rocket';
import Mission from './components/Missions';
import MyProfile from './components/profile';

import { getMissions } from './redux/missions/missionSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
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
