import { NativeModule, requireNativeModule } from 'expo';

import { ExpoNativeLabModuleEvents } from './ExpoNativeLab.types';

declare class ExpoNativeLabModule extends NativeModule<ExpoNativeLabModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoNativeLabModule>('ExpoNativeLab');
