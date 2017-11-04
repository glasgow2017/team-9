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


export function login(username, password) {
  return (dispatch, getState) => {
    const request = JSON.stringify({
      username,
      password,
    });
  }
}

export function signUp(form) {
  return (dispatch, getState) => {

  }
}
