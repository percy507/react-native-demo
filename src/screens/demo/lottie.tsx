import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';

import { Button, ScreenWrapper, View } from '@/components';

export function DemoLottieScreen() {
  const lottieRef = useRef<LottieView>(null);

  useEffect(() => {
    lottieRef.current?.play();
  }, []);

  return (
    <ScreenWrapper contentStyle={styles.root} navbar={{ title: '使用 lottie 动画' }}>
      <View style={styles.btns}>
        <Button label="开始" onPress={() => lottieRef.current?.play()} />
        <Button label="暂停" onPress={() => lottieRef.current?.pause()} />
        <Button label="继续" onPress={() => lottieRef.current?.resume()} />
      </View>
      <View style={styles.single}>
        <LottieView ref={lottieRef} source={require('@/assets/lottie/welcome.json')} />
      </View>

      <View style={styles.single}>
        <LottieView autoPlay source={require('@/assets/lottie/bounce-fruit.json')} />
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
