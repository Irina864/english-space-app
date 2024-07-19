import Loading from './Loading/Loading';
import Error from './Error/Error';
import React, { createContext, useState, useEffect } from 'react';
export const DataContext = createContext();

export const ApiInfo = (props) => {
  const [dictionary, setDictionary] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://itgirlschool.justmakeit.ru/api/words')
      .then((response) => response.json())
      .then((data) => {
        setDictionary(data);
        //check
        // console.log(data);
        //check
      })
      .catch((error) => {
        console.error(`Fetching word information error: ${error}`);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [dictionary]);

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
        setDictionary([...dictionary]);
      }
    } catch (error) {
      console.error(`Adding word error: ${error}`);
      setError(error);
    }
  };

  const updateWord = (updatedInfo) => {
    //check
    console.log(updatedInfo);
    //check
    setLoading(true);
    fetch(
      `http://itgirlschool.justmakeit.ru/api/words/${updatedInfo.id} /update`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedInfo),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(`Updating word error: ${error}`);
        setError(error);
      })
      .finally(setLoading(false));
  };

  const deleteWord = (id) => {
    //check
    console.log(id);
    //check
    setLoading(true);
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Word was not deleted');
        }
        const editedDictionary = [...dictionary].filter(
          (word) => word.id !== id
        );
        setDictionary(editedDictionary);
      })
      .catch((error) => {
        console.error(`Deleting word error: ${error}`);
        setError(error);
      })
      .finally(setLoading(false));
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
