import type { ModalProps } from 'react-native';
import { Modal, Pressable, Text, View } from 'react-native';
import { Button } from 'react-native-ui-lib';

import { px2dp } from '@/utils/style';

import { styles } from './style';

interface AModalProps extends ModalProps {
  setVisible: (visible: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  onOk?: () => void;
  /** 弹窗宽度。 @defaultValue 320 */
  width?: number;
  /** 点击遮罩时是否关闭弹窗。 @defaultValue true */
  closeOnMaskClick?: boolean;
}

export function AModal(props: AModalProps) {
  const {
    title,
    description,
    onOk,
    width = 320,
    closeOnMaskClick = true,
    visible,
    setVisible,
    children,
    ...restProps
  } = props;
  return (
    <Modal
      transparent
      statusBarTranslucent
      animationType="fade"
      visible={visible}
      onDismiss={() => setVisible(false)}
      {...restProps}>
      <Pressable
        style={styles.root}
        onPress={() => closeOnMaskClick && setVisible(false)}>
        <Pressable
          style={[styles.modalView, { width: px2dp(width) }]}
          onPress={(e) => e.stopPropagation()}>
          {children ? (
            children
          ) : (
            <>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
              <View style={styles.footer}>
                <Button
                  outline
                  size="small"
                  label="取消"
                  onPress={() => setVisible(false)}
                />
                <Button size="small" label="确认" onPress={onOk} />
              </View>
            </>
          )}
        </Pressable>
      </Pressable>
    </Modal>
  );
}
