import { API_HOST } from '../config/settings';

export const ADD_USER = 'ADD_USER';
export function add(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export const UPDATE_USER = 'UPDATE_USER';
export function update(user) {
  return {
    type: UPDATE_USER,
    user,
  };
}

export const REMOVE_USER = 'REMOVE_USER';
export function remove() {
  return {
    type: REMOVE_USER,
  };
}


export function login(email, password) {
  return (dispatch) => {
    const url = `${API_HOST}/user.php?login`;
    const headers = {
      'Content-Type': 'application/json',
    };
    const method = 'POST';
    const form = { email, password };
    let errorFlag = false;
    return fetch(url, { method, body: JSON.stringify(form), headers })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          errorFlag = true;
          return response.json();
        }
        return true;
      })
      .then((json) => {
        console.log(json);
        if (errorFlag) {
          throw new Error(json.error);
        }
        return true;
      });
  };
}

export function signUp(form) {
  return (dispatch) => {
    const url = `${API_HOST}/user.php?reg`;
    const headers = {
      'Content-Type': 'application/json',
    };
    const method = 'POST';
    let errorFlag = false;
    return fetch(url, { method, body: JSON.stringify(form), headers })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          errorFlag = true;
          return response.json();
        }
        return true;
      })
      .then((json) => {
        if (errorFlag) {
          throw new Error(json.error);
        }
        return true;
      });
  };
}
