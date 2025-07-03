import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
function useToken() {

  function getToken() {
    const userToken = localStorage.getItem('token');
    return userToken && userToken
  }

  const [token, setToken] = useState(getToken());

  function saveToken(userToken) {
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  function removeToken() {
    localStorage.removeItem("token");
    setToken(null);
  }

  function checkToken(){
      const token = localStorage.getItem('token');
      if (!token) return true; // Token not found, consider it expired
      const expiration = jwtDecode(token).exp * 1000; // Decode token
      return Date.now() > expiration;
  }

  return {
    setToken: saveToken,
    token,
    removeToken,
    checkToken,
  }

}

export default useToken;