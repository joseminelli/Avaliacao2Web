import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import type { Aluno } from "../types/aluno";
import type { HomeProps } from "../types/navigation";

function Home({ navigation }: HomeProps) {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAlunos() {
      try {
        const response = await axios.get<Aluno[]>(
          "https://proweb.leoproti.com.br/alunos"
        );
        setAlunos(response.data);
      } catch (error) {
        console.error("Erro ao buscar alunos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAlunos();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            // Navega para 'Detalhes' passando o ID
            onPress={() => navigation.navigate("Detalhes", { id: item.id })}
          >
            <Text style={styles.itemText}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f0f0" },
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 2,
  },
  itemText: { fontSize: 18 },
});

export default Home;
