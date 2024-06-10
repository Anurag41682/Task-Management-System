function decodeFn(token) {
  if (token) {
    return JSON.parse(atob(token.split(".")[1]));
  }
  return null;
}
export default decodeFn;
