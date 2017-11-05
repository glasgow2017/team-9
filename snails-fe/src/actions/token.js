export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
var tokenValue;
export function receive(token) {
  console.log('jhkjh', token);
  tokenValue = token;
  return {
    type: RECEIVE_TOKEN,
    token,
  };
}

export function getToken() {
  return tokenValue;
}

export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export function remove() {
  return {
    type: REMOVE_TOKEN,
  };
}
