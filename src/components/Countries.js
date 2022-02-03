import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
  const [data,setData] = useState([]);
  const [sortData,setSortData] = useState([]);
  const [notPlayed,setNotPlayed] = useState(true);
  const [rangeValue, setRangeValue] = useState(40);
  const [selectedRadio, setSelectedRadio] = useState('');
  const radios = ['Africa','America','Asia','Europ','Oceania'];

  useEffect(()=>{
    if(notPlayed){
      axios
        .get('https://restcountries.com/v2/all?fields=name,population,region,capital,flag')
        .then((res) => {
          setData(res.data)
          setNotPlayed(false);
        });
      }

    const sortCountries = () => {
      const countriesObj = Object.keys(data).map((country) => data[country]);
      const sortArray = countriesObj.sort((a,b) => b.population - a.population)
      sortArray.length = rangeValue;
      setSortData(sortArray);
    }
    sortCountries();

  },[data,notPlayed,rangeValue])

  return (
    <div className='countries'>
      <div className='sort-container'>
        <input type="range" min="1" max="250" value={rangeValue} onChange={(e) => setRangeValue(e.target.value)}/>
        <ul>
          {radios.map((radio)=>{
            return (
              <li key={radio}>
                <input type="radio" value={radio} id={radio}/>
                <label htmlFor={radio}>{radio}</label>
              </li>
            )
          })}
        </ul>
      </div>
      <ul className='countries-list'>
      {sortData.map((country) => (
          <Card country={country} key={country.name}/>
        ))}
      </ul>
    </div>
  );
};

export default Countries;