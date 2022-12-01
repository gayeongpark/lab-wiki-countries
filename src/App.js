// import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
// import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  useEffect(() => {
      fetch(`https://ih-countries-api.herokuapp.com/countries`)
        .then((res) => res.json())
        return () => {
          console.log('clean');
        }
    }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Routes>
            <Route path=":alpha3Code" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
