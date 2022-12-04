import { createContext, useEffect, useState } from "react";
import getAllCountries from "../services/countries";

export const countriesContext = createContext();

function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getAllCountries().then(res => setCountries(res.countries));
  }, []);
  return (
    <countriesContext.Provider value={{ countries, setCountries}}>
      {children}
    </countriesContext.Provider>
  );
}

export default CountriesProvider;