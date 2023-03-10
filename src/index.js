import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPage from './components/VideoPage';
import CreatePlaylist from './components/CreatePlaylist';
import PlaylistPage from './components/PlaylistPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

        <Routes>
          <Route index path='/' element={<App/>}/>
          <Route path='/video/:videoId' element={<VideoPage/>} />
          <Route path='/playlist/:playlistId' element={<PlaylistPage/>} />
          <Route path='/create' element={<CreatePlaylist/>} />
        </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
