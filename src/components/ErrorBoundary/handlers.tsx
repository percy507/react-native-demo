function stackFilter(stack?: string | null, num = 10) {
  if (!stack) return undefined;
  return stack
    .split('\n')
    .filter((_, index) => index < num)
    .map((el) => el.trim());
}

export function reactRenderErrorHandler(
  id: string,
  err: Error,
  errInfo: React.ErrorInfo,
) {
  let obj = {
    id,
    type: 'reactRenderError',
    msg: err.message, // 这里的key不能设置为 `message`, 否则log不会记录整个对象
    filename: (err as any).sourceURL,
    position: ((err as any).line || 0) + ':' + ((err as any).column || 0),
    stack: stackFilter(err.stack),
    componentStack: stackFilter(errInfo.componentStack, 100),
  };
  log.error(obj);
}

const defaultHandler = ErrorUtils.getGlobalHandler?.();

export function errorHandler() {
  ErrorUtils.setGlobalHandler((err: Error, isFatal?: boolean) => {
    let obj = {
      type: 'jsError',
      isFatal,
      errorName: err.name,
      msg: err.message,
      stack: stackFilter(err.stack),
    };
    log.error(obj);
    defaultHandler?.(err, isFatal);
  });
}

export function unhandledrejectionHandler() {
  // @ts-ignore
  // https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Core/polyfillPromise.js
  if (global?.HermesInternal?.hasPromise?.()) {
    const HermesPromise = global.Promise;
    if (typeof HermesPromise !== 'function') {
      console.error('HermesPromise does not exist');
    }

    const options = {
      allRejections: true,
      onUnhandled: (id: string, err: Error) => {
        let obj = {
          type: 'promiseError',
          errorName: err.name,
          msg: err.message,
          stack: stackFilter(err.stack),
        };
        log.error(obj);
      },
      // onHandled: (id: string) => {},
    };

    // @ts-ignore
    global.HermesInternal?.enablePromiseRejectionTracker?.(options);
  }
}
