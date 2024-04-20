import localforage from 'localforage';

const storage = localforage.createInstance({
  name: 'next-localstorage-blog',
});

export const saveData = async (key, data) => {
  try {
    await storage.setItem(key, data);
  } catch (error) {
    console.error('Error saving data to local storage:', error);
  }
};

export const loadData = async (key) => {
  try {
    return await storage.getItem(key);
  } catch (error) {
    console.error('Error loading data from local storage:', error);
    return null;
  }
};