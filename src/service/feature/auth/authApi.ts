import { api } from '../../api/axiosInstance';

export const googleLogin = async () => {
  await api.post('https://api.kikihi.store/oauth2/authorization/google');
};

export const kakaoLogin = async () => {
  await api.post('https://api.kikihi.store/oauth2/authorization/kakao');
};
