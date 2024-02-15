import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { getStorage, setStorage, removeStorage } from '../utils/Storages';

const BASE_URL = `${process.env.REACT_APP_CLIENT_API}`;

const TokenManager = () => {
  const navigate = useNavigate()
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
    setAccessToken(getStorage('accessToken'));
    setRefreshToken(getStorage('refreshToken'));
    setAccessTokenExpiresIn(getStorage('accessTokenExpiresIn'));
    setRefreshTokenExpiresIn(getStorage('refreshTokenExpiresIn'));
  };

  const setTokens = (tokens) => {
    setAccessToken(tokens.accessToken);
    setRefreshToken(tokens.refreshToken);
    setAccessTokenExpiresIn(tokens.accessTokenExpiresIn);
    setRefreshTokenExpiresIn(tokens.refreshTokenExpiresIn);

    setStorage('accessToken', tokens.accessToken);
    setStorage('refreshToken', tokens.refreshToken);
    setStorage('accessTokenExpiresIn', tokens.accessTokenExpiresIn);
    setStorage('refreshTokenExpiresIn', tokens.refreshTokenExpiresIn);
  };

  const removeTokens = () => {
    if (typeof window === 'undefined') return;
    setAccessToken(null);
    setRefreshToken(null);
    setAccessTokenExpiresIn(null);
    setRefreshTokenExpiresIn(null);

    removeStorage('accessToken');
    removeStorage('refreshToken');
    removeStorage('accessTokenExpiresIn');
    removeStorage('refreshTokenExpiresIn');
  };

  const reissueToken = async ({ refreshToken }) => {
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
