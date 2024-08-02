import Loading from './Loading/Loading';
import Error from './Error/Error';
import React, { createContext, useState, useEffect } from 'react';
export const DataContext = createContext();

export const ApiInfo = (props) => {
  const [dictionary, setDictionary] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDictionary();
  }, []);

  const fetchDictionary = () => {
    setLoading(true);
    fetch('http://itgirlschool.justmakeit.ru/api/words')
      .then((response) => response.json())
      .then((data) => {
        setDictionary(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(`Fetching word information error: ${error}`);
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  const addNewWord = async (newWord) => {
    try {
      const response = await fetch(
        'http://itgirlschool.justmakeit.ru/api/words/add',
        {
          mode: 'no-cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newWord),
        }
      );
      if (response.status === 200) {
        dictionary.push(newWord);
        setDictionary((prevDictionary) => [...prevDictionary, newWord]);
      }
    } catch (error) {
      console.error(`Adding word error: ${error}`);
      setError(error);
    }
  };

  const updateWord = async (updatedInfo) => {
    try {
      const response = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${updatedInfo.id}/update`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedInfo),
        }
      );
      if (response.ok) {
        setDictionary((prevDictionary) =>
          prevDictionary.map((word) =>
            word.id === updatedInfo.id ? updatedInfo : word
          )
        );
      }
    } catch (error) {
      console.error(`Updating word error: ${error}`);
      setError(error);
    }
  };

  const deleteWord = async (id) => {
    try {
      const response = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${id}/delete`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.ok) {
        setDictionary((prevDictionary) =>
          prevDictionary.filter((word) => word.id !== id)
        );
      } else {
        throw new Error('Word was not deleted');
      }
    } catch (error) {
      console.error(`Deleting word error: ${error}`);
      setError(error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <DataContext.Provider
      value={{
        dictionary,
        error,
        addNewWord,
        deleteWord,
        updateWord,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
