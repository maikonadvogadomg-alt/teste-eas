import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const Api = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar dados da API:", error);
      });
  }, []);

  return (
    <View style={styles.apiContainer}>
      {data ? data.map(item => (
        <Text key={item.id} style={styles.apiText}>{item.title}</Text>
      )) : <Text>Carregando dados...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  apiContainer: {
    padding: 16,
  },
  apiText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Api;