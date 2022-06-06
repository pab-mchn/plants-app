import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [monsteraCategory, setMonsteraCategory] = useState([]);
  const [philadendronCategory, setphiladendronCategory] = useState([]);
  const [alocasiaCategory, setAlocasiaCategory] = useState([]);

  useEffect(() => {
    axios("https://randomapiplants.herokuapp.com/db").then((res) =>
      setData(res.data.plants)
    );
  }, []);

  useEffect(() => {
    axios("https://randomapiplants.herokuapp.com/categories").then((res) =>
      setCategories(res.data)
    );
  }, []);

  useEffect(() => {
    axios(
      "https://randomapiplants.herokuapp.com/categories/1/plants"
    ).then((res) => setMonsteraCategory(res.data));
  }, []);

  useEffect(() => {
    axios(
      "https://randomapiplants.herokuapp.com/categories/2/plants"
    ).then((res) => setphiladendronCategory(res.data));
  }, []);

  useEffect(() => {
    axios(
      "https://randomapiplants.herokuapp.com/categories/3/plants"
    ).then((res) => setAlocasiaCategory(res.data));
  }, []);

  return (
    <dataContext.Provider
      value={{
        data,
        categories,
        monsteraCategory,
        philadendronCategory,
        alocasiaCategory,
      }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
