import decodeFn from "./decodeFn";
async function isAuth(token, setIsAdmin) {
  if (!token) return false;
  const currentTime = Date.now() / 1000;
  const decodedToken = decodeFn(token);

  return new Promise((resolve) => {
    if (decodedToken.isAdmin) {
      setIsAdmin(true);
    }
    resolve(decodedToken.exp >= currentTime);
  });
}
export default isAuth;
