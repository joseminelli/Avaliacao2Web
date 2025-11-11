import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';
import type { Aluno } from '../types/aluno';
import type { DetalhesProps } from '../types/navigation';

function Detalhes({ route }: DetalhesProps) {
  const { id } = route.params;
  const [aluno, setAluno] = useState<Aluno | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAluno() {
      try {
        const response = await axios.get<Aluno>(`https://proweb.leoproti.com.br/alunos/${id}`);
        setAluno(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAluno();
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  if (!aluno) {
    return <Text style={styles.errorText}>Aluno não encontrado.</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{aluno.nome}</Text>
        <Text style={styles.text}>Matrícula: {aluno.matricula}</Text>
        <Text style={styles.text}>Email: {aluno.email}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0', padding: 16 },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    elevation: 3,
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  text: { fontSize: 18, marginBottom: 8 },
  errorText: { fontSize: 18, textAlign: 'center', color: 'red' },
});

export default Detalhes;