import { NativeModule, requireNativeModule } from "expo";
import type { NetworkEvents, NetworkEntry } from "./types";

declare class ExpoNativeLabModule extends NativeModule<NetworkEvents> {
  start(): string;
  stop(): string;
  clear(): string;
  getEntries(): NetworkEntry[];
  makeRequest(url: string): Promise<string>;
}

export default requireNativeModule<ExpoNativeLabModule>("ExpoNativeLab");
