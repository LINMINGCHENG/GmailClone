import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mail from './components/Mail/Mail';
import EmailList from './components/EmailList/EmailList';
import SendMail from './components/SendMail/SendMail';
import { useSelector } from 'react-redux';
import {selectSendMessageIsOpen} from './features/MailSlice'
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
   
  return (
    <div className="App">
    <Router>
       
         <div className="app">
         <Header/>
          <div className="app_body">
            <Sidebar/>
          
            <Routes>
             <Route path="/mail" element={<Mail/>}/>
             <Route path="/" element={<EmailList/>}/>
            </Routes>
           </div>
        </div>
        {sendMessageIsOpen&&<SendMail />}
     </Router>
    </div>
  );
}

export default App;
