/* eslint-disable no-unused-vars */
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favorites from './pages/Favorites/Favorites';
import MovieFetcher from './components/Fetcher/MovieFetcher';
import { useState } from 'react';
import Category from './pages/Category/Category';

function App() {
  const [data, setData] = useState();
  return (
    <>
      <BrowserRouter>
        <MovieFetcher onFetch={setData} />
        <Navbar />
        <Routes>
          <Route path="Homepage" element={<Homepage />} />
          <Route path="Favorites" element={<Favorites />} />
          <Route path="/category/:category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
