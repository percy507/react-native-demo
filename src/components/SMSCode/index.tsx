import { useRef, useState } from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';

import { requestSendSMSCode } from '@/services/auth';
import { REG_Phone } from '@/utils/regex';

import { Button } from '../Base/Button';
import { View } from '../Base/View';
import { Loader } from '../Loader';

interface SMSCodeProps {
  style?: ViewStyle;
  phone?: string;
}

export function SMSCode(props: SMSCodeProps) {
  const { phone, style } = props;
  const [loading, setLoading] = useState(false);

  const [count, setCount] = useState(-1);
  const counting = count !== -1;
  const countRef = useRef(count);
  countRef.current = count;

  const isPhoneValid = phone && REG_Phone.test(phone);

  const onSendCode = () => {
    if (loading) return;
    if (!phone) return;
    setLoading(true);
    requestSendSMSCode(phone)
      .then(() => {
        setCount(60);
        let timer = setInterval(() => {
          if (countRef.current === 1) {
            clearInterval(timer);
            setCount(-1);
          } else setCount((v) => v - 1);
        }, 1000);
      })
      .finally(() => setLoading(false));
  };

  return (
    <View style={[styles.root, style]}>
      {loading ? (
        <Loader size={18} color="#666" />
      ) : (
        <Button
          link
          label={counting ? `重新获取${count}秒` : '获取验证码'}
          disabled={!isPhoneValid || counting}
          onPress={onSendCode}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
