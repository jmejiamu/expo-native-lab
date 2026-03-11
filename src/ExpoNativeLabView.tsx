import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoNativeLabViewProps } from './ExpoNativeLab.types';

const NativeView: React.ComponentType<ExpoNativeLabViewProps> =
  requireNativeView('ExpoNativeLab');

export default function ExpoNativeLabView(props: ExpoNativeLabViewProps) {
  return <NativeView {...props} />;
}
