// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importa nossos tipos e telas
import type { RootStackParamList } from "./src/types/navigation";
import Home from "./src/pages/Home";
import Detalhes from "./src/pages/Detalhes";

// Cria o Navegador de Pilha com os tipos que definimos
const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Lista de Alunos" }}
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{ title: "Detalhes do Aluno" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
