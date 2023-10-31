import { atom } from 'jotai';

import { storage } from '@/hooks/useMMKV';

const TOKEN_NAME = 'auth_token';

export function getAuthToken() {
  return storage.getString(TOKEN_NAME);
}

export function setAuthToken(token: string) {
  storage.set(TOKEN_NAME, token);
}

export function clearStorage() {
  storage.clearAll();
}

interface UserInfo {
  name: string;
  phone: string;
  age: number;
}

export const atomUserInfo = atom<UserInfo | null>(null);
