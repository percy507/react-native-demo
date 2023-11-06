import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, View } from 'react-native-ui-lib';

import { getBuildEnv } from '@/env';
import { reloadApp } from '@/utils';
import { generateErrId } from '@/utils/id';

import {
  errorHandler,
  reactRenderErrorHandler,
  unhandledrejectionHandler,
} from './handlers';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  err: { id?: string; message?: string };
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, err: {} };
  }
  static getDerivedStateFromError(err) {
    return { hasError: true, err: { id: generateErrId(), message: err.message } };
  }
  componentDidCatch(err: Error, errInfo: React.ErrorInfo) {
    reactRenderErrorHandler(this.state.err.id!, err, errInfo);
  }
  componentDidMount() {
    errorHandler();
    unhandledrejectionHandler();
  }
  render() {
    const { hasError, err } = this.state;
    if (!hasError) return this.props.children;

    return (
      <View style={styles.root}>
        <Text>应用崩溃了...</Text>
        <Text>id: {err.id}</Text>
        <Text style={{ marginBottom: 12 }}>message: {err.message}</Text>
        <Button
          size="small"
          label={getBuildEnv() === 'debug' ? '重启app (debug环境无法使用)' : '重启app'}
          onPress={() => reloadApp()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
