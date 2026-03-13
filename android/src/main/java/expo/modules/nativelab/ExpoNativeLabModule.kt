package expo.modules.nativelab

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.nativelab.network.NetworkInspectorManager

class ExpoNativeLabModule : Module() {
  private val networkInspector = NetworkInspectorManager(::sendEvent)

  override fun definition() = ModuleDefinition {
    Name("ExpoNativeLab")

    Events("onRequest")

    Function("start") {
      networkInspector.start()
    }

    Function("stop") {
      networkInspector.stop()
    }

    Function("clear") {
      networkInspector.clear()
    }

    Function("getEntries") {
      networkInspector.getEntries()
    }

    AsyncFunction("makeRequest") { url: String ->
      networkInspector.makeRequest(url)
    }
  }
}