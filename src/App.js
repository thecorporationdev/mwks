
import './assets/tailwind.css'
import Header from './components/Header';
import Body from './components/Body';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import { Router , Route, Routes, HashRouter} from 'react-router-dom';

function App() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
  return (
    <div className="App body-font font-stapel">
      <Header openNav ={ openNav } setOpenNav={ setOpenNav }/>
      
        <Routes>
        <Route path = "/" element= {  <Body openNav ={ openNav } setOpenNav={ setOpenNav } />}/>
       
      </Routes>
     
      <Footer openNav ={ openNav } setOpenNav={ setOpenNav } />
     
    </div>
  );
}

export default App;
