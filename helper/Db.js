/* eslint-disable prettier/prettier */
import sqlite from 'react-native-sqlite-storage';

const DB = sqlite.openDatabase({name: 'places.db'});

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    DB.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUrl TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
        [],
        (transaction, result) => {
          resolve();
          console.log('Table Create Successfully');
        },
        err => {
          console.log('Table Error' + err);
          reject(err);
        },
      );
    });
  });

  return promise;
};

export const insertPlace = (title, imgUri, address, lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    DB.transaction(tx => {
      tx.executeSql(
        `INSERT INTO places (title, imageUrl, address, lat ,lng) VALUES (?,?,?,?,?)`,
        [title, imgUri, address, lat, lng],
        (_, result) => {
          resolve(result);
          console.log(
            `${title} ,${imgUri} , ${address} , ${lat} , ${lng} Table Create Successfully`,
          );
        },
        (_, err) => {
          console.log('Table NOT Create Successfully');
          reject(err);
        },
      );
    });
  });

  return promise;
};


export const fetchPlace = () => {
  
  const promise = new Promise((resolve, reject) => {
    DB.transaction(tx => {
      tx.executeSql(
       'SELECT * FROM places',
        [],
        (_, result) => {
          console.log('====================================');
          console.log("Console Log",result);
          console.log('====================================');
          resolve(result);
        },
        (_, err) => {
          reject("EROOR ACCur" + err);
        },
      );
    });
  });

  return promise;
};