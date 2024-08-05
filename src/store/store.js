import { makeAutoObservable, configure } from 'mobx';
import { createContext } from 'react';
configure({ enforceActions: false });
class WordStore {
  words = [];
  loading = true;
  error = false;

  constructor() {
    makeAutoObservable(this);
  }

  async loadDictionary() {
    this.loading = true;
    this.error = false;
    try {
      const response = await fetch(
        `https://itgirlschool.justmakeit.ru/api/words`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
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
        `https://itgirlschool.justmakeit.ru/api/words/add`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newWord),
        }
      );
      if (response.status === 200) {
        this.words.push(newWord);
        this.loadDictionary();
      }
      this.loading = false;
    } catch (error) {
      console.error(`Adding word error: ${error}`);
      this.error = true;
      this.loading = false;
    }
  }

  async updateWord(updatedInfo) {
    this.loading = true;
    try {
      const response = await fetch(
        `https://itgirlschool.justmakeit.ru/api/words/${updatedInfo.id}/update`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedInfo),
        }
      );
      if (response.ok) {
        this.words.forEach((word) =>
          word.id === updatedInfo.id ? updatedInfo : word
        );
      }
      this.loadDictionary();
      this.loading = false;
    } catch (error) {
      console.error(`Updating word error: ${error}`);
      this.error = true;
      this.loading = false;
    }
  }

  async removeWord(id) {
    this.loading = true;
    try {
      const response = await fetch(
        `https://itgirlschool.justmakeit.ru/api/words/${id}/delete`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.ok) {
        this.words = this.words.filter((word) => word.id !== id);
      } else {
        throw new Error('Word was not deleted');
      }
      this.loadDictionary();
      this.loading = false;
    } catch (error) {
      console.error(`Deleting word error: ${error}`);
      this.error = true;
      this.loading = false;
    }
  }
}

export const wordStore = new WordStore();
export const wordStoreContext = createContext(wordStore);
