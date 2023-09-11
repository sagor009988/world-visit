import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {

    const [countries,setcountries]=useState([]);
    const [visitedCountries,setvisitedCountries]=useState([])

    const [visitflags,setvisitflags]=useState([])



    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setcountries(data))
    },[])

    const handlevisitedcountries=(myvisit)=>{
         const newvisit=[...visitedCountries,myvisit]
         setvisitedCountries(newvisit)
    }

    const handlevisitflagsCountries=(flags)=>{
        const newflag=[...visitflags,flags]
        setvisitflags(newflag)
        
    }


    return (
        <div>
            <h2>Countries :{countries.length} </h2>
            <h2>visited Country:{visitedCountries.length}</h2>
            <ul>
            {
                visitedCountries.map((list,idx)=><li key={idx}>{list.name.common}</li>)
            }
            </ul>
            <dl className="flag-container ">
                {
                    visitflags.map((flag,idx)=> <li key={idx}><img src={flag} alt="" /></li>)
                }
            </dl>
           <div className="countries-container">
           {
                countries.map(worldConutry=><Country handlevisitedcountries={handlevisitedcountries}
                     key={worldConutry.cca2} 
                     handlevisitflagsCountries={handlevisitflagsCountries}
                     countryInfo={worldConutry}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;