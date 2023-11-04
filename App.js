import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

import { Provider } from "./src/context/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const Stack = createStackNavigator();

const MyStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerTitle: "Blogs",
      }}
    >
      <Stack.Screen
        name="Index Screen"
        component={IndexScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Create Screen")}
            >
              <Feather name="plus" size={30} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Show Screen"
        component={ShowScreen}
        options={({ route, navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Edit Screen", { id: route.params.id })
              }
            >
              <Feather name="edit" size={30} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Create Screen" component={CreateScreen} />
      <Stack.Screen name="Edit Screen" component={EditScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
