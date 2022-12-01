import React from 'react';
// import { Route } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import Countries from './../countries.json';


export default function CountryDetails() {
    const { alpha3Code } = useParams();
    // const [countries, setCountries] = useState(Countries);
    const foundDetails = Countries.find((country) => {
        return country.alpha3Code === alpha3Code;
    });
    foundDetails && console.log(foundDetails)

    return (
        <div className="countriesDetails">
            <h3>{foundDetails.name.common}</h3>
            <h4>Capital{foundDetails.capital}</h4>
            <h4>Area{foundDetails.area}</h4>
            <h4>Borders</h4><Link>{foundDetails.borders}</Link>
        </div>
    );
}

