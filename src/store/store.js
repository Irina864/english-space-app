import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';

class WordStore {
  words = [];
  loading = true;
  error = false;

  constructor() {
    makeAutoObservable(this);
    this.loadDictionary();
  }

  async loadDictionary() {
    try {
      const response = await fetch(
        'http://itgirlschool.justmakeit.ru/api/words '
      );
      const data = await response.json();
      this.words = data;
      this.loading = false;
    } catch (error) {
      console.error(`Fetching word information error: ${error}`);
      this.error = true;
      this.loading = false;
    }
  }

  async addNewWord(newWord) {
    this.loading = true;
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
        this.words = [...this.words, newWord];
      }
      this.loading = false;
    } catch (error) {
      console.error(`Adding word error: ${error}`);
      this.error = true;
      this.loading = false;
    }
  }
  async updateWord(updatedInfo) {
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
        console.log(updatedInfo);
        this.words.map((word) =>
          word.id === updatedInfo.id ? updatedInfo : word
        );
        this.loading = false;
      }
    } catch (error) {
      console.error(`Updating word error: ${error}`);
      this.error = true;
      this.loading = false;
    }
  }
  async removeWord(id) {
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
        this.words = this.words.filter((word) => word.id !== id);
        console.log(this.words);
      } else {
        throw new Error('Word was not deleted');
      }
    } catch (error) {
      console.error(`Deleting word error: ${error}`);
      this.error = true;
      this.loading = false;
    }
  }
}

export const wordStore = new WordStore();
export const wordStoreContext = createContext(wordStore);
