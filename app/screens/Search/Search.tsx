import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from "react-native";
import { ResultsList, SearchBar } from "../../components";
import { useResults } from "../hooks";

interface SearchScreenProps {

}

export const SearchScreen: React.FC<SearchScreenProps> = ({}) => {
  const [term, setTerm] = useState<string>('');
  const { results, apiSearch, errorMessage } = useResults();

  const onTermSubmit = async () => {
    apiSearch(term);
  };

  const filterResultsByPrice = (price: string) => {
    return results.filter(result => result['price'] === price);
  }

  return (
    <>
      <SearchBar onTermSubmit={onTermSubmit} term={term} onTermChange={setTerm} />
      {errorMessage ? <Text>{`${errorMessage}`}</Text> : null }
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
        <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
      </ScrollView>
      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});