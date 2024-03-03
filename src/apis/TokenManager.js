import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_CLIENT_API}`;
class TokenManager {
  _grantType = null;
  _accessToken = null;
  _refreshToken = null;
  _accessTokenExpiresIn = null;
  _refreshTokenExpiresIn = null;

  constructor() {
    this.initToken();
  }

  // validateToken(expiredString, token) {
  //   if (!expiredString || !token) return false;

  //   return this.calculateMinutes(expiredString, 1) >= new Date();
  // }

  // calculateMinutes(currentDate, addMinute) {
  //   const expiredAt = currentDate ? new Date(currentDate) : new Date();
  //   expiredAt.setMinutes(expiredAt.getMinutes() - addMinute);

  //   return expiredAt;
  // }

  validateToken(expiredString, token) {
    if (!expiredString || !token) return false;
  
    return this.calculateSeconds(expiredString, 1)>= new Date();
  }
  
  calculateSeconds(expiredDate, addSecond) {
    const expiredAt = expiredDate? new Date(expiredDate) : new Date();
    expiredAt.setSeconds(expiredAt.getSeconds() + addSecond);
  
    return expiredAt;
  }
  

  initToken() {
    if (typeof window === 'undefined') return;
    this._grantType = localStorage.getItem('grantType');
    this._accessToken = localStorage.getItem('accessToken');
    this._refreshToken = localStorage.getItem('refreshToken');
    this._accessTokenExpiresIn = localStorage.getItem('accessTokenExpiresIn');
    this._refreshTokenExpiresIn = localStorage.getItem('refreshTokenExpiresIn');
  }

  setTokens(tokens) {
    this._grantType = tokens.grantType;
    this._accessToken = tokens.accessToken;
    this._refreshToken = tokens.refreshToken;
    this._accessTokenExpiresIn = tokens.accessTokenExpiresIn;
    this._refreshTokenExpiresIn = tokens.refreshTokenExpiresIn;

    localStorage.setItem('grantType', tokens.grantType);
    localStorage.setItem('accessToken', tokens.accessToken);
    localStorage.setItem('refreshToken', tokens.refreshToken);
    localStorage.setItem('accessTokenExpiresIn', tokens.accessTokenExpiresIn);
    localStorage.setItem('refreshTokenExpiresIn', tokens.refreshTokenExpiresIn);
  }

  removeTokens() {
    if (typeof window === 'undefined') return;
    this._grantType = null;
    this._accessToken = null;
    this._refreshToken = null;
    this._accessTokenExpiresIn = null;
    this._refreshTokenExpiresIn = null;

    localStorage.removeItem('grantType');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessTokenExpiresIn');
    localStorage.removeItem('refreshTokenExpiresIn');
  }

  async reissueToken( refreshToken ) {
    try {
      const { data } = await axios.patch(
        '/auth',
        {},
        {
          baseURL: BASE_URL,
          withCredentials: true,
          headers: {
            RefreshToken: this.refreshToken && `Bearer ${refreshToken}`,
          },
        }
      );

      this.setTokens(data);

      return true;
    } catch (error) {
      this.removeTokens();
      window.location.href = '/';
      return false;
    }
  }

  get grantType() {
    return this._grantType;
  }

  get accessToken() {
    return this._accessToken;
  }

  get refreshToken() {
    return this._refreshToken;
  }

  get accessTokenExpiresIn() {
    return this._accessTokenExpiresIn;
  }

  get refreshTokenExpiresIn() {
    return this._refreshTokenExpiresIn;
  }
}

export default TokenManager;
