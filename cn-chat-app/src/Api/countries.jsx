import axios from 'axios';
import { CountryFinder } from './country';
import { Nation } from './country';
import { useEffect, useState } from 'react';

function Countries() {
  const [countryName, setCountryName] = useState('');
  const [country, setCountry] = useState([]);
  const url = `https://studies.cs.helsinki.fi/restcountries/api/all`;
  
  const hook = () => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setCountry(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
      });
  };

  //filtering the countries based on the input value
  const Query = country.filter((c) => c.name.common.toLowerCase().includes(countryName.toLowerCase()));

  // Query.map((value) => {
  //   value.latlng.map((lat, lon) => {
  //     axios
  //       .get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}8&hourly=temperature_2m`)
  //       .then((response) => {
  //         setCountry((prev) => ({
  //           ...prev,
  //           weather: response.data,
  //         }));
  //       });
  //   });
  // });

  function handleChange(e) {
    e.preventDefault();
    setCountryName(e.target.value);
  }

  useEffect(() => {
    hook();
  }, []);
  return (
    <section className="card">
      <div>
        <h1>Countries</h1>
        <CountryFinder value={countryName} change={handleChange} />
      </div>
      <div className=" mt-2">
        <Nation Query={Query} />
      </div>
    </section>
  );
}

export default Countries;
// The Countries component is a functional component that renders the Country component. The Country component is a child component of the Countries component. The Countries component is exported as the default export of the file.
