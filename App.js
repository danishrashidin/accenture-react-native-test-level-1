import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Screens
import Home from "./screen/Home";
import Form from "./screen/Form";
import Catalog from "./screen/Catalog";
import PokemonDetails from "./screen/PokemonDetails";

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={Form} name="Form" />
          <Stack.Screen component={Catalog} name="Catalog" />
          <Stack.Screen component={PokemonDetails} name="Pokemon" />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

