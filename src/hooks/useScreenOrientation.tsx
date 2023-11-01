import {
  addOrientationChangeListener,
  getOrientationAsync,
  lockAsync,
  Orientation,
  OrientationLock,
  removeOrientationChangeListener,
} from 'expo-screen-orientation';
import { useEffect, useMemo, useState } from 'react';

export { OrientationLock } from 'expo-screen-orientation';

interface UseScreenOrientationOptions {
  /** @defaultValue `OrientationLock.DEFAULT` */
  initialOrientationLock?: OrientationLock;
  /** @defaultValue `true` */
  listenOrientationChange?: boolean;
}

/** 设置屏幕方向或监听屏幕方向的变动 */
export function useScreenOrientation(options: UseScreenOrientationOptions = {}) {
  const {
    initialOrientationLock = OrientationLock.DEFAULT,
    listenOrientationChange = true,
  } = options;
  const [orientation, setOrientation] = useState<Orientation>(Orientation.UNKNOWN);

  useEffect(() => {
    if (!listenOrientationChange) return;
    const listener = addOrientationChangeListener((evt) => {
      setOrientation(evt.orientationInfo.orientation);
    });
    return () => removeOrientationChangeListener(listener);
  }, [listenOrientationChange]);

  const setOrientationLock = useMemo(
    (orientationLock = initialOrientationLock) => {
      return async () => {
        await lockAsync(orientationLock);
        setOrientation(await getOrientationAsync());
      };
    },
    [initialOrientationLock],
  );

  useEffect(() => {
    setOrientationLock();
  }, [setOrientationLock]);

  return [orientation, setOrientationLock];
}
