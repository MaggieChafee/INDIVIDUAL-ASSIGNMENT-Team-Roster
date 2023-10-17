import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getCharacters = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/characters.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteCharacter = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/characters/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getSinglCharacter = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/characters/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createCharacter = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/characters.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateCharacter = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/characters/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getCharacters,
  deleteCharacter,
  getSinglCharacter,
  createCharacter,
  updateCharacter,
};
