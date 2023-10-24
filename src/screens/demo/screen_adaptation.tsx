import { Text, useWindowDimensions, View } from 'react-native';

import { ScreenWrapper } from '@/components';
import { px2dp, PxStyleSheet } from '@/utils/style';

export function DemoScreenAdaptation() {
  const sizes = useWindowDimensions();
  return (
    <ScreenWrapper contentStyle={styles.root} navbar={{ title: '测试屏幕适配' }}>
      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 15, fontWeight: '500', paddingBottom: 6 }}>
          Window Dimension Data{' '}
          <Text style={{ fontSize: 12 }}>(useWindowDimensions)</Text>
        </Text>
        <Text>width(页面窗口宽度, 单位为px): {sizes.width}</Text>
        <Text>height(页面窗口高度, 单位为px): {sizes.height}</Text>
        <Text>fontScale(字体缩放比): {sizes.fontScale}</Text>
        <Text style={{ lineHeight: 15 }}>
          scale(dpr, 即 device pixel ratio): {sizes.scale}
        </Text>
      </View>

      <View style={styles.wrapper}>
        <View style={[styles.block, { width: 150, height: 150 }]}>
          <Text style={{ color: '#fff' }}>
            <Text>不做适配处理{'\n'}</Text>
            <Text>150 x 150{'\n'}</Text>
            <Text>屏幕宽度: {sizes.width.toFixed(2)}px</Text>
          </Text>
        </View>
        <View
          style={[
            styles.block,
            {
              width: px2dp(150),
              height: px2dp(150),
            },
          ]}>
          <Text style={{ color: '#fff' }}>
            <Text>做适配处理{'\n'}</Text>
            <Text>150px x 150px{'\n'}</Text>
            <Text>设计稿宽度: 375px</Text>
          </Text>
        </View>
      </View>

      <View style={styles.wrapper}>
        <View style={[styles.block2, { width: 150, height: 100 }]}>
          <Text style={{ color: '#fff' }}>
            <Text>不做适配处理{'\n'}</Text>
            <Text>150 x 100</Text>
          </Text>
        </View>
        <View style={[styles.block2]}>
          <Text style={{ color: '#fff' }}>
            <Text>做适配处理{'\n'}</Text>
            <Text>150 x 100{'\n'}</Text>
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = PxStyleSheet.create({
  root: { padding: 12 },
  wrapper: { flexDirection: 'row', gap: 5, marginBottom: 24 },
  block: { backgroundColor: 'red', padding: 4 },
  block2: { width: 150, height: 100, backgroundColor: 'red' },
});
