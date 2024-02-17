import axios from 'axios';
import TokenManager from './TokenManager';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_CLIENT_API}`,
  withCredentials: true,
});

instance.interceptors.request.use(async (config) => {
  const tokenManager = new TokenManager();
  const accessTokenIsValid = tokenManager.validateToken(tokenManager.accessTokenExpiresIn, tokenManager.accessToken);
  const refreshTokenIsValid = tokenManager.validateToken(tokenManager.refreshTokenExpiresIn, tokenManager.refreshToken);

  if (!accessTokenIsValid && refreshTokenIsValid) {
    await tokenManager.reissueToken({ refreshToken: tokenManager.refreshToken });
    tokenManager.initToken();
  } else if (!accessTokenIsValid && !refreshTokenIsValid) {
    tokenManager.removeTokens();
    window.location.href = '/signin';
  }

  config.headers['Authorization'] = tokenManager.accessToken ? `Bearer ${tokenManager.accessToken}` : undefined;

  return config;
});

export default instance;
