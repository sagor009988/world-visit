
import { useState } from 'react';
import './country.css'
import CountryDetail from '../countryDetail/CountryDetail';

const Country = ({countryInfo,handlevisitedcountries,handlevisitflagsCountries}) => {
  
const {name,languages,area,population,flags}=countryInfo
const alllanguages=Object.values(languages ||{})

const [visited,setvisited] =useState(false)

const handlevisited=()=>{
setvisited(!visited)
}
console.log(handlevisitflagsCountries);

    return (
        <div className={`country ${visited?'visited':'none'}`}>
            <h2 style={{color:visited? 'white':'red'}}>Country Name :{name.common} </h2>
            <img src={flags.png} alt="" />
            <h2>Area: {area}</h2>
            <h2>People:{population}</h2>
            <h2>Language:</h2>
            <ul >
                {
                  alllanguages.map((item,idx)=><li key={idx}>{item}</li>)
                }
            </ul>
            <button onClick={()=>handlevisitedcountries(countryInfo)}>visit countries</button>
            <button onClick={()=>handlevisitflagsCountries(countryInfo.flags.png)}>visited flags</button>
            <br />
            <button onClick={handlevisited}> {visited? 'visited':'GOing'}</button>
            {
                visited ? 'i have visited this countries':'want to visit'
            }
            <hr />
            <CountryDetail>
               worldConutry={countryInfo}
            handlevisitedcountries={handlevisitedcountries}
            handlevisitflagsCountries={handlevisitflagsCountries}
            </CountryDetail>

        </div>
    );
};

export default Country;