import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NetworkInspectorScreen from "../screeens/NetworkInspector";
import Home from "../screeens/Home";

export type RootStackParamList = {
  Home: undefined;
  NetworkInspector: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function MainNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="NetworkInspector"
          component={NetworkInspectorScreen}
          options={{ title: "Network Inspector" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
