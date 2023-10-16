import { atom } from 'jotai';

import { storage } from '@/utils/storage';

interface UserInfo {
  name: string;
  phone: string;
  age: number;
}

let lastUserInfo = JSON.parse(storage.getString('userInfo') || 'null') as UserInfo | null;
let realUserInfo = lastUserInfo || {
  name: '张三',
  phone: '13888888888',
  age: 18,
};

console.log('lastUserInfo', lastUserInfo);
export const atomUserInfo = atom<UserInfo | null>(realUserInfo);
