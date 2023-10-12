import { atom } from 'jotai';

interface UserInfo {
  name: string;
  phone: string;
  age: number;
}

export const atomUserInfo = atom<UserInfo | null>(null);
