import type { ModalProps as RNModalProps } from 'react-native';
import { Modal as RNModal, Pressable } from 'react-native';

import { Button } from '../Button';
import { Text } from '../Text';
import { View } from '../View';
import { styles } from './style';

export interface ModalProps extends RNModalProps {
  setVisible: (visible: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  onOk?: () => void;
  /** 弹窗宽度。 @defaultValue 320 */
  width?: number;
  /** 点击遮罩时是否关闭弹窗。 @defaultValue true */
  closeOnMaskClick?: boolean;
}

export function Modal(props: ModalProps) {
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
    <RNModal
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
          style={[styles.modalView, { width }]}
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
    </RNModal>
  );
}
