/* Librairies */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* Page */
import Profil from './page/Profil/Profil';
import NotFound from './page/NotFound/NotFound';

/* CSS */
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/:id' element={<Profil />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
