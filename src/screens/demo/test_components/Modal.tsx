import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Modal, Text, View } from '@/components';

export default function Demo() {
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);

  return (
    <View style={styles.root}>
      <Button label="弹窗（标准）" size="small" onPress={() => setV1(true)} />
      <Modal
        visible={v1}
        setVisible={setV1}
        title="我是标题"
        description="内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述"
        onOk={() => setV1(false)}
      />

      <Button label="弹窗（自定义内容）" size="small" onPress={() => setV2(true)} />
      <Modal visible={v2} setVisible={setV2}>
        <View>
          <Text>弹窗自定义内容</Text>
          <Text style={{ color: 'red' }}>111111</Text>
          <Text style={{ fontSize: 24, fontWeight: '600' }}>22222</Text>
          <Button label="弹窗（标准）" size="small" onPress={() => setV1(true)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    gap: 10,
  },
});
