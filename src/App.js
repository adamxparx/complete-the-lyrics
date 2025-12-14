import { Grid } from '@mui/material';
import './App.css';
import MainLayout from './pages/MainLayout';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import FirstSinger from './pages/FirstSinger';
import SecondSinger from './pages/SecondSinger';
import ThirdSinger from './pages/ThirdSinger';
import FourthSinger from './pages/FourthSinger';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/singer" replace />} />
          <Route path="/singer" element={<MainLayout />}>
            <Route path='first' element={<FirstSinger />} />
            <Route path='second' element={<SecondSinger />} />
            <Route path='third' element={<ThirdSinger />} />
            <Route path='fourth' element={<FourthSinger />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
