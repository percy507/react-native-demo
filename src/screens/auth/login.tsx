import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { Toast } from 'react-native-toast-notifications';
import { Button, Checkbox, Text, TextField, View } from 'react-native-ui-lib';

import { IconFont, Loader, ScreenWrapper, SMSCode } from '@/components';
import type { StackNav } from '@/navigators/routes';
import { requestSMSLogin } from '@/services/auth';
import { setAuthToken } from '@/stores/user';
import { colors } from '@/theme/color';
import { debounce } from '@/utils';
import { REG_Phone } from '@/utils/regex';

interface FormValue {
  phone?: string;
  code?: string;
}

export function LoginScreen() {
  const {
    watch,
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormValue>({ mode: 'onBlur' });

  const phone = watch('phone');

  const nav = useNavigation<StackNav>();
  const [agreed, setAgreed] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = debounce(
    handleSubmit((data) => {
      if (!agreed) return Toast.show('请同意用户协议', { placement: 'center' });
      if (submitting) return;

      setSubmitting(true);
      requestSMSLogin(data)
        .then(({ data }) => {
          setAuthToken(data);
          nav.replace('home');
          Toast.show('登录成功', { placement: 'center' });
        })
        .finally(() => setSubmitting(false));
    }),
    200,
  );

  return (
    <ScreenWrapper navbar={{ show: false }}>
      <View style={styles.root}>
        <Text style={styles.title}>手机号登录</Text>
        <Controller
          control={control}
          name="phone"
          rules={{
            required: '请输入手机号',
            pattern: { value: REG_Phone, message: '手机号码不正确' },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              style={styles.inputRoot}
              fieldStyle={styles.inputBox}
              value={value}
              onChangeText={(value) => onChange(value.replace(/\D/g, ''))}
              onBlur={onBlur}
              placeholder="手机号"
              maxLength={11}
              keyboardType="number-pad"
              bottomAccessory={
                <Text text14 red20>
                  {(errors.phone?.message as string) || ''}
                </Text>
              }
              leadingAccessory={
                <IconFont
                  name="icon-contact"
                  color="#333"
                  size={20}
                  style={{ marginRight: 10 }}
                />
              }
            />
          )}
        />
        <Controller
          control={control}
          name="code"
          rules={{
            required: '请输入验证码',
            pattern: { value: /^\d{6}$/, message: '验证码不正确' },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              style={styles.inputRoot}
              fieldStyle={styles.inputBox}
              value={value}
              onChangeText={(value) => onChange(value.replace(/\D/g, ''))}
              onBlur={onBlur}
              placeholder="验证码"
              maxLength={6}
              keyboardType="number-pad"
              bottomAccessory={
                <Text text14 red20>
                  {(errors.code?.message as string) || ''}
                </Text>
              }
              leadingAccessory={
                <IconFont
                  name="icon-hashiqi"
                  color="#333"
                  size={20}
                  style={{ marginRight: 10 }}
                />
              }
              trailingAccessory={<SMSCode phone={phone} />}
            />
          )}
        />

        <View style={styles.footer}>
          <Button onPress={onSubmit} disabled={!isValid}>
            {submitting && <Loader size={14} color="#fff" style={{ marginRight: 8 }} />}
            <Text color="#fff">登录</Text>
          </Button>
          <View style={styles.agree}>
            <Checkbox
              size={16}
              borderRadius={4}
              style={{ marginRight: 6 }}
              color={colors.primary}
              value={agreed}
              onValueChange={(v) => setAgreed(v)}
            />
            <Text text12 onPress={() => setAgreed((v) => !v)}>
              已阅读并同意
            </Text>
            <Button
              link
              labelStyle={{ fontSize: 13 }}
              label="《用户协议》"
              onPress={() => nav.navigate('user_protocol')}
            />
            <Text text12>与</Text>
            <Button
              link
              labelStyle={{ fontSize: 13 }}
              label="《隐私政策》"
              onPress={() => nav.navigate('privacy_policy')}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 150,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
    marginBottom: 36,
    textAlign: 'center',
  },
  inputRoot: {
    fontSize: 16,
  },
  inputBox: {
    borderBottomWidth: 1,
    borderColor: '#f3f3f3',
    paddingBottom: 4,
  },
  footer: {
    marginTop: 30,
  },
  agree: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
});
