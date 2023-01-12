import React from 'react'
import Detail from './Detail';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from './UserList';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList/>}/>
            <Route path="/detail" element={<Detail/>} />
        </Routes>
      </BrowserRouter>

    </>

  );
}
export default App;