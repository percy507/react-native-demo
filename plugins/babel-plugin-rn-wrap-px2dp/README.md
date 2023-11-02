## babel-plugin-rn-wrap-px2dp

一个 babel 插件，用来给 react-native 的行内样式或`StyleSheet.create`中的样式，自动包裹 `px2dp` 函数。

## 局限性

- 对于通过添加 jsx 元素自定义属性动态添加的纯 object 的样式，无法自动包裹 (比如 `react-native-ui-lib` 中的 modifiers)

```jsx
import { Colors, Spacings, Typography, Text } from 'react-native-ui-lib';

// 无法为下面的 style 自动包裹
Typography.loadTypographies({
  text998: {
    width: 375 - 12,
    backgroundColor: 'green',
    fontSize: 20,
    lineHeight: 32,
    color: 'red',
  },
});

export function Demo() {
  return <Text text998>text111</Text>;
}
```
