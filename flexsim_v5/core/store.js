const state = {};

export function getState(key) {
  return key ? state[key] : { ...state };
}

export function setState(key, value) {
  state[key] = value;
}
