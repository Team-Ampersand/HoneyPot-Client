import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const BASE_URL = `${process.env.REACT_APP_CLIENT_API}`;

const TokenManager = () => {
  const navigate = useNavigate()
  const [grantType, setGrantType] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [accessTokenExpiresIn, setAccessTokenExpiresIn] = useState(null);
  const [refreshTokenExpiresIn, setRefreshTokenExpiresIn] = useState(null);

  useEffect(() => {
    initToken();
  }, []);

  const validateToken = (expiredString, token) => {
    if (!expiredString || !token) return false;
    return calculateMinutes(expiredString, 1) >= new Date();
  };

  const calculateMinutes = (currentDate, addMinute) => {
    const expiredAt = currentDate ? new Date(currentDate) : new Date();
    expiredAt.setMinutes(expiredAt.getMinutes() - addMinute);
    return expiredAt;
  };

  const initToken = () => {
    if (typeof window === 'undefined') return;
    setGrantType(localStorage.getItem('grantType'));
    setAccessToken(localStorage.getItem('accessToken'));
    setRefreshToken(localStorage.getItem('refreshToken'));
    setAccessTokenExpiresIn(localStorage.getItem('accessTokenExpiresIn'));
    setRefreshTokenExpiresIn(localStorage.getItem('refreshTokenExpiresIn'));
  };

  const setTokens = (tokens) => {
    setGrantType(tokens.grantType);
    setAccessToken(tokens.accessToken);
    setRefreshToken(tokens.refreshToken);
    setAccessTokenExpiresIn(tokens.accessTokenExpiresIn);
    setRefreshTokenExpiresIn(tokens.refreshTokenExpiresIn);

    localStorage.setItem('grantType', tokens.grantType)
    localStorage.setItem('accessToken', tokens.accessToken)
    localStorage.setItem('refreshToken', tokens.refreshToken)
    localStorage.setItem('accessTokenExpiresIn', tokens.accessTokenExpiresIn)
    localStorage.setItem('refreshTokenExpiresIn', tokens.refreshTokenExpiresIn)
  };

  const removeTokens = () => {
    if (typeof window === 'undefined') return;
    setGrantType(null);
    setAccessToken(null);
    setRefreshToken(null);
    setAccessTokenExpiresIn(null);
    setRefreshTokenExpiresIn(null);

    localStorage.removeItem('grantType')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('accessTokenExpiresIn')
    localStorage.removeItem('refreshTokenExpiresIn')
  };

  const reissueToken = async ( refreshToken ) => {
    try {
      const { data } = await axios.patch(
        '/auth',
        {},
        {
          baseURL: BASE_URL,
          withCredentials: true,
          headers: {
            refreshToken: refreshToken && `Bearer ${refreshToken}`,
          },
        }
      );

      setTokens(data);

      return true;
    } catch (error) {
      removeTokens();
      navigate('/');
      return false;
    }
  };

  return {
    grantType,
    accessToken,
    refreshToken,
    accessTokenExpiresIn,
    refreshTokenExpiresIn,
    validateToken,
    calculateMinutes,
    initToken,
    setTokens,
    removeTokens,
    reissueToken,
  };
};

export default TokenManager;
