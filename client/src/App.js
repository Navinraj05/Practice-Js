// import './App.css';
// import { Route, Routes } from 'react-router-dom'  
// import  Usestate from './components/Hooks/Usestate';
// import  Usecallback from './components/Hooks/Usecallback';
// import  Useeffect from './components/Hooks/Useeffect';
// import  Usememo  from './components/Hooks/Usememo';
// import  Useref  from './components/Hooks/Useref';
// // import { Usestate,Useref,Usememo,Useeffect,Usecallback } from './components/Hooks/';
// // import { Usestate,Useref,Usememo,Useeffect,Usecallback } from './components/Hooks/Usestate';
// import Navbar from './components/Navbar';
// import Home from './components/general/Home'
// import About from './components/general/about'

// function App() {
//   return (
//     <>
//      <h1>React Router Example</h1> 
 
//     <Routes>
     
//          <Route path="/" element={<Home/>} />  
//          <Route path="/About" element={<About/>} />   
//          <Route path="/usestate" element={<Usestate/>} />    
//          <Route path="/useref" element={<Useref/>} />    
//          <Route path="/usememo" element={<Usememo/>} />       
//          <Route path="/useeffect" element={<Useeffect/>} />    
//          <Route path="/usecallback" element={<Usecallback/>} />    
//          <Route path="/" element={<Home/>} />    
//       </Routes>
 
  
//   </>
//   );
// }

// export default App;

import React from 'react';
import QRCodeGenerator from './QRcode/QRcodeGenerator';
import './index.css';

function App() {
  return (
    <div>
      {/* <BMI/> */}
     <QRCodeGenerator />
    </div>
  );
}

export default App;

