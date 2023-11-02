import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BlogProvider } from "./src/context/BlogContext";

import IndexScreen from "./src/screens/IndexScreen";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerTitle: "Blogs",
      }}
    >
      <Stack.Screen name="Index Screen" component={IndexScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <BlogProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </BlogProvider>
  );
};

export default App;
