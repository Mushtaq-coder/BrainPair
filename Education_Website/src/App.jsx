import React from 'react'
import {Routes , Route} from 'react-router-dom';
import LoadingPage from './LoadingPage.jsx';
import Register from './Register.jsx';
import LoginPage from './LoginPage.jsx';
import ProfileSetup from './ProfileSetup.jsx';
function App() {
  return(
    <Routes>
      <Route path="/" element={<LoadingPage />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/profile-setup" element={<ProfileSetup />}/>
      
    </Routes>

    
  );

}

export default App
