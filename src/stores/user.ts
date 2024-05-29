import { atom } from 'jotai';

import { storage } from '@/hooks/useMMKV';

const TOKEN_NAME = 'auth_token';

export const getAuthToken = () => storage.getItem(TOKEN_NAME);
export const setAuthToken = (token: string) => storage.setItem(TOKEN_NAME, token);

/** 获取插入到webview中的token相关的脚本 */
export const getTokenScript = () => {
  let token = getAuthToken();
  if (!token) return 'localStorage.clear()';
  return `
  localStorage.removeItem('${TOKEN_NAME}');
  localStorage.setItem('${TOKEN_NAME}', JSON.stringify('${token}'));
  `;
};

interface UserInfo {
  name: string;
  phone: string;
  age: number;
}

export const atomUserInfo = atom<UserInfo | null>(null);
