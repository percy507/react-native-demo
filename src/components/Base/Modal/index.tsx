import { Dimensions, Pressable, StyleSheet } from 'react-native';
import type { ModalProps as ReactNativeModalProps } from 'react-native-modal';
import { ReactNativeModal } from 'react-native-modal';

import { Button } from '../Button';
import { Text } from '../Text';
import { View } from '../View';

export interface ModalProps
  extends Partial<Omit<ReactNativeModalProps, 'isVisible' | 'children'>> {
  visible?: boolean;
  setVisible: (visible: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  onOk?: () => void;
  /** 弹窗宽度。 @defaultValue 320 */
  width?: number;
  children?: React.ReactNode;
}

export function Modal(props: ModalProps) {
  const {
    title,
    description,
    onOk,
    width = 320,
    visible,
    setVisible,
    children,
    animationIn = 'fadeIn',
    animationInTiming = 200,
    animationOut = 'fadeOut',
    animationOutTiming = 200,
    backdropColor = '#000',
    backdropOpacity = 0.4,
    onBackdropPress,
    onDismiss = () => setVisible(false),
    ...restProps
  } = props;
  return (
    <ReactNativeModal
      {...restProps}
      style={styles.root}
      statusBarTranslucent
      useNativeDriverForBackdrop
      deviceWidth={Dimensions.get('screen').width}
      deviceHeight={Dimensions.get('screen').height}
      onBackdropPress={onBackdropPress ?? onDismiss}
      animationIn={animationIn}
      animationInTiming={animationInTiming}
      animationOut={animationOut}
      animationOutTiming={animationOutTiming}
      backdropColor={backdropColor}
      backdropOpacity={backdropOpacity}
      isVisible={visible}
      onDismiss={onDismiss}>
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
    </ReactNativeModal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    alignItems: 'center',
    marginTop: 20,
  },
});
