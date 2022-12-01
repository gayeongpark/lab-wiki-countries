import React from 'react';
import { useState } from 'react';
import Countries from './../countries.json';
import { Link } from 'react-router-dom';

export default function CountriesList() {
  const [countries, setCountries] = useState(Countries);

  return (
    <div className="countriesList">
      {countries.map((country) => (
        <div className="list-group-item list-group-item-action" key={country.alpha3Code}>
          <Link to={country.alpha3Code}>
            {country.alpha3Code}
          </Link>
        </div>
      ))}
    </div>
  );
}
