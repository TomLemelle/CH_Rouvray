import axios from "axios";
import jwtDecode from "jwt-decode";
import { getItem, addItem, removeItem } from "./LocaleStorage";

const URLApi = "http://127.0.0.1:8000/api/";
export function hasAuthenticated() {
  const token = getItem("chrouvrayToken");
  const result = token ? tokenIsValid(token) : false;

  if (false === result) {
    removeItem("chrouvrayToken");
  }
  return result;
}

export function login(credentials) {
  return axios
    .post(URLApi + "authentication_token", credentials)
    .then((response) => response.data.token)
    .then((token) => {
      addItem("Token", token);

      return true;
    });
}

export function logout() {
  removeItem("chrouvrayToken");
}

function tokenIsValid(token) {
  const { exp } = jwtDecode(token);

  if (exp * 1000 > new Date().getTime()) {
    return true;
  }
  return false;
}
