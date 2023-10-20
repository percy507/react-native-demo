import Lottie from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, ScreenWrapper } from '@/components';

export function DemoLottieScreen() {
  const lottieRef = useRef<Lottie>(null);

  useEffect(() => {
    lottieRef.current?.play();
  }, []);

  return (
    <ScreenWrapper contentStyle={styles.root} navbar={{ title: '使用 lottie 动画' }}>
      <View style={styles.btns}>
        <Button title="开始" onPress={() => lottieRef.current?.play()} />
        <Button title="暂停" onPress={() => lottieRef.current?.pause()} />
        <Button title="继续" onPress={() => lottieRef.current?.resume()} />
      </View>
      <View style={styles.single}>
        <Lottie ref={lottieRef} source={require('@/assets/lottie/welcome.json')} />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 12,
  },
  btns: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  single: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
