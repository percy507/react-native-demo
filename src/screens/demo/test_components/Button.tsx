import { StyleSheet, View } from 'react-native';

import { Button } from '@/components';

export default function Demo() {
  return (
    <View style={styles.root}>
      <Button label="按钮" />
      <Button label="按钮 (size=small)" size="small" />
      <Button label="按钮 (size=xSmall)" size="xSmall" />
      <Button link label="按钮 (link)" />
      <Button loading label="按钮 (loading)" style={{ borderRadius: 1 }} />
      <Button
        outline
        loading
        label="按钮 (outline & loading)"
        style={{ borderRadius: 1 }}
      />
      <Button
        backgroundColor="#30B650"
        label="按钮 (自定义背景色 & enableShadow)"
        labelStyle={{ fontWeight: '600' }}
        enableShadow
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    gap: 10,
  },
});
