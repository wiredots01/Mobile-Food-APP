import { Feather } from "@expo/vector-icons";
import React from 'react';
import { StyleSheet, TextInput, View } from "react-native";

interface SearchBarProps {
  term: string,
  onTermChange: (searchString: string) => void;
  onTermSubmit: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ term, onTermChange, onTermSubmit }) => {
    return (
      <View style={styles.search}>
        <Feather name="search" style={styles.icon} />
        <TextInput 
          style={styles.input}
          placeholder="Search"
          value={term}
          onChangeText={onTermChange}
          autoCapitalize="none"
          autoCorrect={false}
          onEndEditing={onTermSubmit}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15
  },
  input: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  }
});