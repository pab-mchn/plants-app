import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [monsteraCategory, setMonsteraCategory] = useState([]);
  const [philadendronCategory, setphiladendronCategory] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/db").then((res) => setData(res.data.plants));
  }, []);

  useEffect(() => {
    axios("http://localhost:3000/categories/1/plants").then((res) =>
      setMonsteraCategory(res.data)
    );
  }, []);

  useEffect(() => {
    axios("http://localhost:3000/categories/2/plants").then((res) =>
      setphiladendronCategory(res.data)
    );
  }, []);
  console.log(monsteraCategory);

  return (
    <dataContext.Provider
      value={{
        data,
        monsteraCategory,
        philadendronCategory,
      }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
