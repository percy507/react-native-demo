import { StyleSheet } from 'react-native';
import Svg, { G, Rect } from 'react-native-svg';

import { Text } from '../Text';
import { View } from '../View';

export interface DividerProps {
  /** 线条的大小. @defaultValue 0.8 */
  size?: number;
  /** 类型是实线还是虚线. @defaultValue `solid` */
  type?: 'solid' | 'dashed';
  /** 水平或是垂直. @defaultValue `horizontal` */
  axis?: 'horizontal' | 'vertical';
  /** 垂直时指定分隔线高度. @defaultValue `40` */
  height?: number;
  /** 分隔线颜色 */
  color?: string;
  /** 文字(水平时有效) */
  text?: string;
  /** @defaultValue `center` */
  textAlign?: 'left' | 'center' | 'right';
  /** 虚线间隔宽度 */
  dashGap?: number;
  /** 单格虚线宽度 */
  dashLength?: number;
  /** 虚线厚度 */
  dashThickness?: number;
  margin?: number;
}

export function Divider(props: DividerProps) {
  const {
    size = 0.5,
    type = 'solid',
    axis = 'horizontal',
    height = 20,
    color = '#ccc',
    text = '',
    textAlign = 'center',
    dashGap,
    dashLength,
    dashThickness,
    margin = 8,
  } = props;

  const dashLineStyle = { dashLength, dashThickness, dashGap, color, margin };

  if (!text) {
    if (type === 'dashed') {
      return axis === 'horizontal' ? (
        <HorizontalDashLine {...dashLineStyle} />
      ) : (
        <VerticalDashLine {...{ ...dashLineStyle, height }} />
      );
    }
    return (
      <View
        style={[
          { backgroundColor: color },
          axis === 'horizontal'
            ? { width: '100%', height: size, marginVertical: margin }
            : { width: size, height, marginHorizontal: margin },
        ]}
      />
    );
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View
        style={[
          type === 'solid'
            ? { width: '100%', height: size, backgroundColor: color }
            : null,
          styles[`prefix-${textAlign}`],
        ]}>
        {type === 'dashed' && <HorizontalDashLine {...dashLineStyle} />}
      </View>
      <View style={styles.content}>
        <Text variant="hint">{text}</Text>
      </View>
      <View
        style={[
          type === 'solid'
            ? { width: '100%', height: size, backgroundColor: color }
            : null,
          styles[`suffix-${textAlign}`],
        ]}>
        {type === 'dashed' && <HorizontalDashLine {...dashLineStyle} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  'prefix-left': { flex: 1 },
  'prefix-center': { flex: 1 },
  'prefix-right': { flex: 6 },
  'suffix-left': { flex: 6 },
  'suffix-center': { flex: 1 },
  'suffix-right': { flex: 1 },
  content: { marginHorizontal: 8 },
});

const HorizontalDashLine: React.FC<
  Pick<DividerProps, 'dashGap' | 'dashLength' | 'dashThickness' | 'color' | 'margin'>
> = ({ dashLength, dashThickness, dashGap, color, margin }) => {
  const itemWidth = dashLength ?? px2dp(8);
  const itemHeight = dashThickness ?? px2dp(1);
  const spacing = dashGap ? dashGap + itemWidth : px2dp(16);
  const dashes = new Array(Math.floor(WINDOW_WIDTH / spacing)).fill(0);

  return (
    <View style={{ width: '100%', marginHorizontal: margin }}>
      <Svg height={itemHeight} width="100%">
        <G>
          {dashes.map((_, index) => (
            <Rect
              key={index}
              x="0"
              y="0"
              width={itemWidth}
              height={itemHeight}
              fill={color}
              translateX={spacing * index}
            />
          ))}
        </G>
      </Svg>
    </View>
  );
};

const VerticalDashLine: React.FC<
  Pick<
    DividerProps,
    'dashGap' | 'dashLength' | 'dashThickness' | 'color' | 'margin' | 'height'
  >
> = ({ dashLength, dashThickness, dashGap, color, margin, height }) => {
  const itemWidth = dashLength ?? px2dp(1);
  const itemHeight = dashThickness ?? px2dp(2);
  const spacing = dashGap ? dashGap + itemHeight : px2dp(4);
  const dashes = new Array(Math.floor(height! / spacing)).fill(0);

  return (
    <View style={{ height, marginHorizontal: margin }}>
      <Svg width={itemWidth} height="100%">
        <G>
          {dashes.map((_, index) => (
            <Rect
              key={index}
              x="0"
              y={spacing ? spacing / 2 : 0}
              width={itemWidth}
              height={itemHeight}
              fill={color}
              translateY={spacing * index}
            />
          ))}
        </G>
      </Svg>
    </View>
  );
};
