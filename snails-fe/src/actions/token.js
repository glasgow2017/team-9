export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
export function receive(token) {
  return {
    type: RECEIVE_TOKEN,
    token,
  };
}

export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export function remove() {
  return {
    type: REMOVE_TOKEN,
  };
}
