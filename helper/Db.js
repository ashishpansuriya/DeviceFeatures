import sqlite from 'react-native-sqlite-storage';

const DB = sqlite.openDatabase('place.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    DB.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXIST place (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUrl TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
};
