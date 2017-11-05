export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
export function receive(token) {
  return {
    type: RECEIVE_TOKEN,
    token,
  };
}
