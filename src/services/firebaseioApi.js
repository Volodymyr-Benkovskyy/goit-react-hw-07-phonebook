import axios from 'axios';

axios.defaults.baseURL =
  'https://bookcontacts-47551-default-rtdb.firebaseio.com/';

export const addContactApi = items => {
  return axios.post('/contacts.json', items).then(respons => {
    const { data } = respons;
    return { ...items, id: data.name };
  });
};

export const getContactsApi = () => {
  return axios
    .get('/contacts')
    .then(({ data }) =>
      Object.entries(data).map(([id, dataForm]) => ({ id, ...dataForm }))
    );
};

export const removeContactsApi = id => {
  return axios.delete(`/contacts/${id}.json`).then(respons => respons.data);
};

//Метод << Object.entries >> є частиною JavaScript і використовується для отримання масиву,
//що містить масиви пар ключ - значення з властивостей об'єкта,
//який передається у якості аргументу.Кожен підмасив в масиві містить =>
//два елементи: перший елемент - це ключ властивості,
//а другий - відповідне значення цієї властивості.

// const obj = { a: 1, b: 2, c: 3 };
// const entries = Object.entries(obj);
// console.log(entries);
// Результат: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

//  те що повертає бекент сервіс при post запиті ==>>
// name: "-Nd0iYefw2ZoVY1tfKSt"}
// name
// :
// "-Nd0iYefw2ZoVY1tfKSt"
