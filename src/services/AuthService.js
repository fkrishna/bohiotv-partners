import Api from "services/api"
import * as Storage from "helpers/storage"

export async function authenticate(credentials) {
  return Api.post("/authenticate", credentials)
    .then(handleResponse)
    .then(response => {
      const { user } = response.data.payload
      if (user) Storage.setItem('user', user)
      return response
    })
    .catch(handleError)
}

export function logout() {
  // Api.defaults.headers.common["Authorization"] = `Bearer `;
  // Api.defaults.headers.common["userId"] = "";
  Storage.removeItem("user");
}

export function isLoggedIn() {
  return (
    Storage.getItem('user') !== {} ||
    Storage.getItem('user') !== undefined ||
    Storage.getItem('user') !== null
  )
}


// function register(user) {
//   return Api.post("/users", user);
// }

function handleResponse(response) {
  // if (!response.data.payload.user) return Promise.reject("invalid credentials");

  // const authToken = response.data.data;
  // return authToken;
  console.log(response)
  return response
}

function handleError(error) {
  // call an error logging service.
  console.error("API call failed. " + error);
  throw error;
}





