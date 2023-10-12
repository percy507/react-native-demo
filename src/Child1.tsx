import { StatusBar } from 'expo-status-bar';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { atomUserInfo } from './store/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function Child1() {
  const [userInfo, setUserInfo] = useAtom(atomUserInfo);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => setCount((v) => v + 1), 500);
    setUserInfo({
      name: '张三',
      phone: '13888888888',
      age: 18,
    });
    setInterval(
      () => setUserInfo((v) => (v != null ? { ...v, age: v.age + 1 } : null)),
      2000,
    );
  }, [setUserInfo]);

  return (
    <View style={styles.container}>
      <Text>两岸猿声啼不住，轻舟已过万重山。 {count}</Text>
      <Text>{JSON.stringify(userInfo, null, 2)}</Text>
      <StatusBar style="auto" />
      <Child2 />
    </View>
  );
}

export function Child2() {
  const userInfo = useAtomValue(atomUserInfo);
  return (
    <View>
      <Text>Child2</Text>
      <Text>{JSON.stringify(userInfo, null, 2)}</Text>
    </View>
  );
}
