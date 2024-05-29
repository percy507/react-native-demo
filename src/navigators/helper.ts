import type { NavigationContainerRef } from '@react-navigation/native';
import { createRef } from 'react';

/** Access navigate in normal function. */
export const navigationRef = createRef<NavigationContainerRef<RouteParamList>>();
