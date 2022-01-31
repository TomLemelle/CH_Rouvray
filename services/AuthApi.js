import axios from "axios";
import jwtDecode from "jwt-decode";
import { removeToStorage, setToStorage, getFromStorage } from "./LocaleStorage";

const URLApi = "http://127.0.0.1:8000/api/";
export function hasAuthenticated() {
  if (typeof window !== "undefined") {
    const token = window.localStorage.getItem("chrouvrayToken");
    const result = token ? tokenIsValid(token) : false;
    if (false === result) {
      window.localStorage.removeItem("chrouvrayToken");
    }
    return result;
  }
  return false;
}

export function login(credentials) {
  return axios
    .post(URLApi + "authentication_token", credentials)
    .then((response) => response.data.token)
    .then((token) => {
      console.log(token);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("chrouvrayToken", token);
      }
    });
}

export function logout() {
  if (typeof window !== "undefined")
    window.localStorage.removeItem("chrouvrayToken");
}

function tokenIsValid(token) {
  const { exp } = jwtDecode(token);

  if (exp * 1000 > new Date().getTime()) {
    return true;
  }
  return false;
}

export function decodeJWT(token) {
  return jwtDecode(token);
}
