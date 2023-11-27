import {addHeaders, get, post} from "../utils/api/api";
import storage from "../utils/storage";

const _storage = storage("info", ({access_token} = {}) => {
  addHeaders({
    "Authorization": access_token ? `Bearer ${access_token}` : false
  })
});
_storage.load()

export function login(data) {
  return post("/user/login", data)
    .then(saveAuth)
}

export function signup(data) {
  return post("/user/signup", data)
    .then(saveAuth)
}

export function update(data) {
  return post("/user/update", data)
}

export function profile() {
  return get("/user/profile")
}

export function logout() {
  return post("/user/logout")
    .then(saveAuth)
}

export function form(data) {
  return post("form", data)

}

// export async function test2(data) {
//   var button = document.getElementById('myButton');
//   button.disabled = true;
//   console.log(button.disabled)
//   try {
//     const response = await fetch('/api/form', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
//     const data2 = await response.json();
//     console.log(data2);
//   } catch (error) {
//     console.error('Ошибка при отправке формы:', error);
//   }

//   setTimeout(() => {
//     button.disabled = false;
//     console.log(button.disabled)
//   }, 3000);
//   //return new Promise(() => console.log(data))
// }

function saveAuth(data) {
  _storage.save(data?.profile);

  return data;
}

