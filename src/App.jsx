/* eslint-disable no-unused-vars */
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites/Favorites";
import MovieFetcher from "./components/Fetcher/MovieFetcher";
import { useState } from "react";
import Category from "./pages/Category/Category";
import Detail from "./pages/Detail/Detail";
import { Provider } from "react-redux";
import store from "./Store/store";

function App() {
  const [data, setData] = useState();
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <MovieFetcher onFetch={setData} />
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Detail/:id" element={<Detail />} />
            <Route path="Favorites" element={<Favorites />} />
            <Route path="/category/:category" element={<Category />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
