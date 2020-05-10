import React from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ResultDetails } from "./ResultDetails";
interface ResultsListProps {
  title: string;
  results: any[];
}

export const ResultsList: React.FC<ResultsListProps> = ({ title, results }) => {
  if (!results.length) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        horizontal
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => <ResultDetails result={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  }
});
