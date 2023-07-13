/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import  { createContext, useEffect, useState } from 'react';
export const ServicesContext = createContext();

const Context = ({children}) => {
  const [services, setServices] = useState([]);    
    useEffect(() => {
        fetch("https://talent-pro-task-server.vercel.app/data")
          .then((res) => res.json())
          .then((data) => setServices(data))
          .catch((error) => console.error(error))
      }, []);      
    return (
        <ServicesContext.Provider value={services}>
            {children}
        </ServicesContext.Provider>
    );
};

export default Context;