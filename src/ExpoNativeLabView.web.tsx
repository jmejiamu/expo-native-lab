import * as React from 'react';

import { ExpoNativeLabViewProps } from './ExpoNativeLab.types';

export default function ExpoNativeLabView(props: ExpoNativeLabViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
