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
    stack: err.stack?.split('\n'),
    componentStack: errInfo.componentStack?.split('\n'),
  };
  log.error(obj);
}

const defaultHandler = ErrorUtils.getGlobalHandler?.();

export function errorHandler() {
  ErrorUtils.setGlobalHandler((error: Error, isFatal?: boolean) => {
    let obj = {
      type: 'jsError',
      isFatal,
      errorName: error.name,
      msg: error.message,
      stack: error.stack,
    };
    log.error(obj);
    defaultHandler?.(error, isFatal);
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
      onUnhandled: (id: string, error: Error) => {
        let obj = {
          type: 'promiseError',
          errorName: error.name,
          msg: error.message,
          stack: error.stack,
        };
        log.error(obj);
      },
      // onHandled: (id: string) => {},
    };

    // @ts-ignore
    global.HermesInternal?.enablePromiseRejectionTracker?.(options);
  }
}
