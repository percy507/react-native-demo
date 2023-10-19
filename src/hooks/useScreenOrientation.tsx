import {
  addOrientationChangeListener,
  lockAsync,
  OrientationLock,
  removeOrientationChangeListener,
} from 'expo-screen-orientation';
import { useEffect, useState } from 'react';

interface UseScreenOrientationOptions {
  /** @defaultValue `OrientationLock.DEFAULT` */
  initialOrientation?: OrientationLock;
  /** @defaultValue `true` */
  listenOrientationChange?: boolean;
}

/** 设置屏幕方向或监听屏幕方向的变动 */
export function useScreenOrientation(options: UseScreenOrientationOptions = {}) {
  const { initialOrientation = OrientationLock.DEFAULT, listenOrientationChange = true } =
    options;

  const [orientation, setOrientation] = useState<OrientationLock>(initialOrientation);

  useEffect(() => {
    if (!listenOrientationChange) return;
    const listener = addOrientationChangeListener((evt) => {
      setOrientation(evt.orientationLock);
    });
    return () => removeOrientationChangeListener(listener);
  }, [listenOrientationChange]);

  useEffect(() => {
    async function changeScreenOrientation() {
      await lockAsync(orientation);
    }
    changeScreenOrientation();
  }, [orientation]);

  return [orientation, setOrientation];
}
