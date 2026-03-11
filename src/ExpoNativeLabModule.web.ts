import { registerWebModule, NativeModule } from 'expo';

import { ExpoNativeLabModuleEvents } from './ExpoNativeLab.types';

class ExpoNativeLabModule extends NativeModule<ExpoNativeLabModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoNativeLabModule, 'ExpoNativeLabModule');
