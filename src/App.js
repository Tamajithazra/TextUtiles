import './App121.css';
import React,{useEffect, useState} from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
   const [mode ,setMode]=useState("light");
   const toggleMode=()=>{
       if(mode==="dark")
      {
        setMode("light");
        showAlert("LightMode Enabled Successfully","success");
        document.title="TEXT UTILES-Home";
      }else{
        setMode("dark");
        showAlert("DarkMode Enabled Successfully","success");
        document.title="Text Utiles-Dark Mode";
        setInterval(()=>{document.title="TextUtiles is Amazing"},2000);
        setInterval(()=>{document.title="textUtiles ko Download kar bsdk"},1500);
      }
   };
   const toggleRedDarkMode=()=>{
     if(mode==='red-dark')
     {
        setMode("light");
        showAlert("Light Mode Enabled Succesfully","success");
        document.title="TEXT UTILES-Home";
     }else{
       setMode("red-dark");
       showAlert("Red Dark Mode Enabled Succesfully","success");
       document.title="Text Utiles-Red Dark Mode";
     }
   };
   const toggleBlueDarkMode=()=>{
    if(mode==='blue-dark')
    {
      setMode("light");
      showAlert("Light Enabled Successfully","success");
      document.title="TEXT UTILES-Home";
    }else{
      setMode("blue-dark");
      showAlert("Blue Dark Mode Enabled Successfully","success");
      document.title="Text Utiles-Blue Dark Mode";
    }
   }
   useEffect(()=>{
    if(mode==="dark")
    {
       document.body.style.backgroundColor="#121212";
    
    }else if(mode==="red-dark")
    {
      document.body.style.backgroundColor="#730000";
    }else if(mode==="blue-dark"){
      document.body.style.backgroundColor="#111184";
    }else{
        document.body.style.backgroundColor="white";
    }
  },[mode])
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    });
  };
  return (
  <>
    <Navbar title="TextUtiles" about="About TextUtiles" mode={mode} toggleMode={toggleMode} toggleRedDarkMode={toggleRedDarkMode} toggleBlueDarkMode={toggleBlueDarkMode}/>
    <Alert alert={alert}/>
    
    <div className="container">
      <TextForm heading="Enter your text to analyze below" mode={mode} toggleRedDarkMode={toggleRedDarkMode} toggleBlueDarkMode={toggleBlueDarkMode}/>
      <About/>
    </div>
    </>   
  );
}
export default App;
