import { useState } from "react";
import {Footer, Login, Moria } from "./components";
import useToken from './services/useToken';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

function setToken(userToken) {
  sessionStorage.setItem('accessToken', JSON.stringify(userToken));
}

const App = () => {
  const { token, setToken } = useToken();

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-bg-welcome">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login setToken={setToken} />} />
            <Route path='/moria' element={<Moria token={token} />} />
            <Route path='/footer' element={<Footer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}


export default App;
