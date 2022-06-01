import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/db").then((res) => setData(res.data.plants));
  }, []);
  console.log(data);

  return (
    <dataContext.Provider
      value={{
        data,
        setData,
      }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
