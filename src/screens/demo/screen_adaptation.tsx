import { Platform, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { ScreenWrapper } from '@/components';

export function DemoScreenAdaptation() {
  const sizes = useWindowDimensions();
  return (
    <ScreenWrapper navbar={{ title: '测试屏幕适配' }}>
      <View style={styles.box1}>
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
        <Text>设计稿宽度(px): {UI_WIDTH}</Text>
        <Text style={{ textAlign: 'right', color: 'red', marginTop: 20 }}>
          {'12px的右边框 ==>'}
        </Text>
      </View>

      <Example />
    </ScreenWrapper>
  );
}

function Example() {
  const height = 200;

  const box21 = {
    width: 375,
    height: 50,
    backgroundColor: 'red',
  };

  return (
    <View>
      <View
        style={[
          styles.box2,
          { width: px2dp(375 - 12), height, paddingTop: Platform.OS === 'web' ? 10 : 20 },
        ]}>
        <Text style={{ color: '#fff' }}>width: 375 - 12{'\n'}height: 200</Text>
        <Text style={{ paddingTop: 24, fontSize: 20 }}>text111</Text>
        <Text
          style={
            Platform.OS === 'web' ? { fontSize: 16 } : { fontSize: 24, color: 'red' }
          }>
          text222
        </Text>
        <Text style={styles.text}>text</Text>
        <Text style={styles.subtext}>subtext</Text>
      </View>
      <View style={[styles.commonBox, box21]}>
        <Text style={{ color: '#fff', padding: 12 }}>
          375x50 (样式为行内style中的变量引用)
        </Text>
      </View>
      <View style={[styles.commonBox, styles.box22]}>
        <Text style={{ color: '#fff' }}>
          375x50 (样式为StyleSheet.create中的变量引用)
        </Text>
      </View>
      <View style={[styles.commonBox, box23()]}>
        <Text style={{ color: '#fff' }}>375x50 (样式为箭头函数的返回值)</Text>
      </View>
      <View style={[styles.commonBox, centerBox(375, 50, 'green')]}>
        <Text style={{ color: '#fff' }}>375x50 (样式为函数动态计算后的返回值)</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Text
            style={{
              height: 20,
              textAlign: 'right',
              paddingRight: 6,
            }}>
            {'12x50 ==>'}
          </Text>
          <View style={[styles.commonBox, centerBox(120, 30, 'grey')]}>
            <Text style={{ color: '#fff' }}>120x30</Text>
          </View>
        </View>
        <View style={{ width: 12, height: 50, backgroundColor: 'red' }} />
      </View>
      <View style={{ flexDirection: 'row', gap: 135, borderWidth: 1 }}>
        <Text style={{ position: 'absolute', zIndex: 2, left: 160, top: 5 }}>
          gap: 135
        </Text>
        <View style={[styles.commonBox, centerBox(120, 30, '#38f')]}>
          <Text style={{ color: '#fff' }}>120x30</Text>
        </View>
        <View style={[styles.commonBox, centerBox(120, 30, '#38f')]}>
          <Text style={{ color: '#fff' }}>120x30</Text>
        </View>
      </View>
    </View>
  );
}

// nested
const otherStyle = {
  padding: 12,
};

const box22 = {
  ...otherStyle,
  width: 375,
  height: 50,
  backgroundColor: 'green',
};

const box23 = () => ({ width: 375, height: 50, backgroundColor: 'blue' });

function centerBox(width, height, bgc) {
  return centerBoxNested(width, height, bgc);
}

function centerBoxNested(width, height, bgc) {
  return { width, height, backgroundColor: bgc };
}

const styles = StyleSheet.create({
  box1: {
    padding: 12,
    borderRightWidth: 12,
    borderColor: 'red',
  },
  box2: {
    position: Platform.OS === 'web' ? 'absolute' : 'relative',
    alignItems: 'center',
    backgroundColor: '#4169E1',
    padding: 6,
    ...(Platform.OS === 'web' ? { overflow: 'hidden', userSelect: 'none' } : null),
  },
  text: { color: '#fff', fontSize: 16 },
  subtext: { color: 'red', fontSize: 12 + 4 },
  box22,
  commonBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
