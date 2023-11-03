import Constants from 'expo-constants';
import * as Updates from 'expo-updates';
import { useState } from 'react';
import { ScrollView, TouchableWithoutFeedback } from 'react-native';
import type { ViewProps } from 'react-native-ui-lib';
import { Button, RadioButton, RadioGroup, Text, View } from 'react-native-ui-lib';

import { getConfig } from '@/config';
import { getAppEnv, getBuildEnv, setPersistentEnv } from '@/env';

import { AModal } from '../AModal';
import { styles } from './style';

interface EnvSwitcherProps extends ViewProps {}

export function EnvSwitcher(props: EnvSwitcherProps) {
  const { style, ...restProps } = props;

  const initEnv = getAppEnv();
  const buildEnv = getBuildEnv();
  if (buildEnv === 'release') return null;

  const onEnvChange = async (value: string) => {
    setPersistentEnv(value);
    await Updates.reloadAsync();
  };

  return (
    <View style={[styles.root, style]} {...restProps}>
      <Text style={styles.title}>当前环境: {initEnv}</Text>
      {buildEnv === 'debug' ? (
        <Text style={{ marginBottom: 10, color: 'red' }}>
          buildEnv 为 local 时，不允许页面中切换环境，请通过改代码切换
        </Text>
      ) : (
        <RadioGroup
          style={styles.envGroup}
          initialValue={initEnv}
          onValueChange={onEnvChange}>
          <RadioButton size={20} value="local" label="local" />
          <RadioButton size={20} value="dev" label="dev" />
          <RadioButton size={20} value="test" label="test" />
          <RadioButton size={20} value="prod" label="prod" />
        </RadioGroup>
      )}
      <View style={{ gap: 6 }}>
        <ViewAppConfig />
        <ViewExpoConfig />
        <ViewLog />
      </View>
    </View>
  );
}

function ViewAppConfig() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <AModal visible={visible} setVisible={setVisible}>
        <Text style={{ fontSize: 15, fontWeight: '500', marginBottom: 6, marginTop: -6 }}>
          查看 AppConfig
        </Text>
        <ScrollView style={{ maxHeight: 500 }}>
          <TouchableWithoutFeedback>
            <Text>{JSON.stringify(getConfig(), null, 2)}</Text>
          </TouchableWithoutFeedback>
        </ScrollView>
      </AModal>
      <Button size="small" label="查看 AppConfig" onPress={() => setVisible(true)} />
    </>
  );
}

function ViewExpoConfig() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <AModal visible={visible} setVisible={setVisible}>
        <Text style={{ fontSize: 15, fontWeight: '500', marginBottom: 6, marginTop: -6 }}>
          查看 ExpoConfig
        </Text>
        <ScrollView style={{ maxHeight: 500 }}>
          <TouchableWithoutFeedback>
            <Text>{JSON.stringify(Constants.expoConfig || 'null', null, 2)}</Text>
          </TouchableWithoutFeedback>
        </ScrollView>
      </AModal>
      <Button size="small" label="查看 ExpoConfig" onPress={() => setVisible(true)} />
    </>
  );
}

// TODO
function ViewLog() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <AModal visible={visible} setVisible={setVisible}>
        <Text style={{ fontSize: 15, fontWeight: '500', marginBottom: 6, marginTop: -6 }}>
          查看本地日志
        </Text>
        <ScrollView style={{ maxHeight: 500 }}>
          <TouchableWithoutFeedback>
            <Text>{JSON.stringify(Constants.expoConfig || 'null', null, 2)}</Text>
          </TouchableWithoutFeedback>
        </ScrollView>
      </AModal>
      <Button size="small" label="查看本地日志" onPress={() => setVisible(true)} />
    </>
  );
}
