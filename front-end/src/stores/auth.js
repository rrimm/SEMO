import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const isLogin = atom({
  key: 'isLogin',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

const jwtToken = atom({
  key: 'jwtToken',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export { isLogin, jwtToken };
