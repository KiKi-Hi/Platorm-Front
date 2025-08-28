import { api } from '../../api/axiosInstance';

const googleLogin = async () => {
  await api.post('https://api.kikihi.store/oauth2/authorization/google');
};

const kakaoLogin = async () => {
  await api.post('https://api.kikihi.store/oauth2/authorization/kakao');
};

const logout = async () => {
  await api.post('https://api.kikihi.store/api/v1/auth/logout');
};

export { googleLogin, kakaoLogin, logout };