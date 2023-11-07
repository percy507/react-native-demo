import { useState } from 'react';
import { MMKV } from 'react-native-mmkv';

const mmkv = new MMKV({
  id: 'main.store',
  encryptionKey: 'main-hello990x#%&*',
});

export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

export const storage = {
  getItem: <T extends JSONValue>(key: string): T | undefined => {
    try {
      const value = mmkv.getString(key);
      return value ? (JSON.parse(value) as T) : undefined;
    } catch (_) {
      log.error(`JSON.parse failed to resolve mmkv value which key is: ${key}`);
      return undefined;
    }
  },
  setItem: <T extends JSONValue>(key: string, value: T) => {
    mmkv.set(key, JSON.stringify(value));
  },
  removeItem: (key: string) => mmkv.delete(key),
  clearAll: () => mmkv.clearAll(),
};

export function useMMKV<T extends JSONValue>(key: string) {
  const [value, setValue] = useState<T | undefined>(storage.getItem<T>(key));
  const set = (val: T) => {
    setValue(val);
    storage.setItem(key, JSON.stringify(val));
  };
  return [value, set] as const;
}
