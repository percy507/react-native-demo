import { useState } from 'react';
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV({
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

export function useMMKV<T extends JSONValue>(key: string) {
  const [value, setValue] = useState<T>(JSON.parse(storage.getString(key) || 'null'));
  const set = (val: T) => {
    setValue(val);
    storage.set(key, JSON.stringify(val));
  };
  return [value, set] as const;
}
