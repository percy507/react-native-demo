import { atom } from 'jotai';

import { storage } from '@/hooks/useMMKV';

const TOKEN_NAME = 'auth_token';

export const getAuthToken = () => storage.getItem(TOKEN_NAME);
export const setAuthToken = (token: string) => storage.setItem(TOKEN_NAME, token);

interface UserInfo {
  name: string;
  phone: string;
  age: number;
}

export const atomUserInfo = atom<UserInfo | null>(null);
