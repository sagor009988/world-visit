import CountryData from "../countryData/CountryData";




const CountryDetail = (props) => {
    const {countryInfo,visitlist,handlevisitflagsCountries}=props
    return (
        <div>
            <h2>Country Details :</h2>
            
            {/* <CountryData>
            worldConutry={countryInfo}
            handlevisitedcountries={visitlist}
            handlevisitflagsCountries={handlevisitflagsCountries}
            </CountryData> */}
            <CountryData{...props}></CountryData>

        </div>
    );
};

export default CountryDetail;