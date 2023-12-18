import React from 'react';
import './App.css';
import LogoNTmpt from "./component/LogoNTmpt";
import TombolLokasiKiriAtas from "./component/TombolLokasiKiriAtas";
import HeroImage from './component/HeroImage';
import LoveProfile from './component/LoveProfile';
import SearchBar from './component/SearchBar';


function App () {
  return (
    <div className="App">
      <header className="App-header">
        <HeroImage />
      </header>
        

      <body>
      <LoveProfile />
      <LogoNTmpt />
      <TombolLokasiKiriAtas />
      <SearchBar />
      </body>
    </div>
  );
}

export default App;
