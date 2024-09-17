// src/screens/DashboardScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseConfig'; // Certifique-se de exportar o Firestore do firebaseConfig

const DashboardScreen = ({ navigation }) => {
  const [ocorrencias, setOcorrencias] = useState([]);

  useEffect(() => {
    const fetchOcorrencias = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'ocorrencias'));
        const ocorrenciasList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOcorrencias(ocorrenciasList);
      } catch (error) {
        console.error('Erro ao buscar ocorrências', error);
      }
    };

    fetchOcorrencias();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard de Ocorrências</Text>
      <FlatList
        data={ocorrencias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.condominio}</Text>
            <Text>{item.descricao}</Text>
            <Text>Status: {item.status}</Text>
            <Button
              title="Ver Detalhes"
              onPress={() => navigation.navigate('OcorrenciaDetalhes', { ocorrencia: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  item: {
    marginBottom: 16,
    padding: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
  },
  itemTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default DashboardScreen;
