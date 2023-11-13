import { StyleSheet, View } from 'react-native';

import { Image } from '@/components';

export default function Demo() {
  return (
    <View style={styles.root}>
      <Image
        style={{ width: '100%', height: 200 }}
        source="https://img.zcool.cn/community/012d0861825f9d11013e894384250f.jpg"
        contentFit="cover"
        transition={200}
      />

      <Image
        style={{ width: 300, height: 200 }}
        source="https://picsum.photos/seed/696/3000/2000"
        contentFit="cover"
        transition={400}
      />

      <Image
        style={{ width: 300, height: 200, borderWidth: 1, borderRadius: 5 }}
        source="https://s1.4sai.com/src/img/gif/5b/5b09f1a9ff004ac495d6eb5bc75a06c2.gif?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:Ja3QAfx3qyUqfxYEjOXIkauld7U="
        contentFit="contain"
        transition={400}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { padding: 20, gap: 10 },
});
