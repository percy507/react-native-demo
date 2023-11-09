import dayjs from 'dayjs';
import Constants from 'expo-constants';
import * as FileSystem from 'expo-file-system';
import { useEffect, useState } from 'react';
import { ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Checkbox, RadioButton, RadioGroup } from 'react-native-ui-lib';

import { getConfig } from '@/config';
import { colors } from '@/theme/color';
import { reloadApp } from '@/utils';
import { getAppEnv, getBuildEnv, setPersistentEnv } from '@/utils/env';

import { Button } from '../Base/Button';
import { Modal } from '../Base/Modal';
import { Text } from '../Base/Text';
import { View } from '../Base/View';
import { FloatingBubble } from '../FloatingBubble';
import { styles } from './style';

export function DebugTool() {
  const [visible, setVisible] = useState(false);

  const initEnv = getAppEnv();
  const buildEnv = getBuildEnv();
  if (buildEnv === 'release') return null;

  const onEnvChange = async (value: string) => {
    setPersistentEnv(value);
    await reloadApp();
  };

  return (
    <>
      <FloatingBubble
        style={{ bottom: 100, right: 20 }}
        content={
          <>
            <Text style={{ fontSize: 8, color: '#fff' }}>当前环境</Text>
            <Text style={{ fontSize: 12, color: '#fff' }}>{initEnv}</Text>
          </>
        }
        onPress={() => setVisible(true)}
      />

      <Modal visible={visible} setVisible={setVisible}>
        <View style={[styles.root]}>
          <Text style={styles.title}>当前环境: {initEnv}</Text>
          {buildEnv === 'debug' ? (
            <Text style={{ fontSize: 12, marginBottom: 10, color: 'red' }}>
              buildEnv 为 debug 时，不允许页面中切换后端环境，请通过改代码切换
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
      </Modal>
    </>
  );
}

function ViewAppConfig() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Modal visible={visible} setVisible={setVisible}>
        <Text style={{ fontSize: 15, fontWeight: '500', marginBottom: 6, marginTop: -6 }}>
          查看 AppConfig
        </Text>
        <ScrollView style={{ maxHeight: 500 }}>
          <TouchableWithoutFeedback>
            <Text style={{ fontSize: 12 }}>{JSON.stringify(getConfig(), null, 2)}</Text>
          </TouchableWithoutFeedback>
        </ScrollView>
      </Modal>
      <Button size="small" label="查看 AppConfig" onPress={() => setVisible(true)} />
    </>
  );
}

function ViewExpoConfig() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Modal visible={visible} setVisible={setVisible}>
        <Text style={{ fontSize: 15, fontWeight: '500', marginBottom: 6, marginTop: -6 }}>
          查看 ExpoConfig
        </Text>
        <ScrollView style={{ maxHeight: 500 }}>
          <TouchableWithoutFeedback>
            <Text style={{ fontSize: 12 }}>
              {JSON.stringify(Constants.expoConfig || 'null', null, 2)}
            </Text>
          </TouchableWithoutFeedback>
        </ScrollView>
      </Modal>
      <Button size="small" label="查看 ExpoConfig" onPress={() => setVisible(true)} />
    </>
  );
}

function ViewLog() {
  const [visible, setVisible] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [onlyToday, setOnlyToday] = useState(true);

  useEffect(() => {
    if (!visible) return setLogs([]);
    FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'main.log')
      .then((data = '') => {
        if (!data) return;

        setLogs(
          data
            .split(/(^|\n)\[#/)
            .reverse()
            .map((el) => (el.startsWith('[#') ? el : `[#${el}`)),
        );
      })
      .catch((err) => setLogs(['读取日志失败', err?.toString()]));
  }, [visible]);

  const clearLog = async () => {
    await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'main.log', '');
    setLogs([]);
  };

  return (
    <>
      <Modal visible={visible} setVisible={setVisible}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 6,
            marginTop: -6,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 15, fontWeight: '500' }}>查看本地日志</Text>
          <Checkbox
            size={16}
            borderRadius={4}
            label="仅今天"
            labelStyle={{ marginLeft: 6, textAlignVertical: 'center' }}
            color={colors.primary}
            value={onlyToday}
            onValueChange={(v) => setOnlyToday(v)}
          />
          <Button label="清空日志" size="xSmall" onPress={() => clearLog()} />
        </View>
        <ScrollView style={{ maxHeight: 500 }}>
          <TouchableWithoutFeedback>
            {logs.length ? (
              <Text style={{ fontSize: 12 }}>
                {logs.filter((el) => {
                  return onlyToday
                    ? new RegExp(`^(\\[#)?${dayjs().format('YYYY-MM-DD')}`).test(el)
                    : true;
                })}
              </Text>
            ) : (
              <Text style={{ padding: 20, paddingTop: 32, textAlign: 'center' }}>
                暂无日志
              </Text>
            )}
          </TouchableWithoutFeedback>
        </ScrollView>
      </Modal>
      <Button size="small" label="查看本地日志" onPress={() => setVisible(true)} />
    </>
  );
}
