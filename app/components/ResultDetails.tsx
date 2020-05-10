import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

interface ResultDetailsProps {
  result: {
    name: string;
    image_url: string;
    rating: number;
    review_count: number;
    id: string;
  }
}

export const ResultDetails: React.FC<ResultDetailsProps> = ({ result }) => {
  const navigation = useNavigation();

  const goToDetails = () => {
    navigation.navigate('FoodDetails', { id: result.id });
  };
  
  return (
    <TouchableOpacity style={styles.container} onPress={goToDetails}>
      <Image style={styles.image} source={{ uri: result.image_url}} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.review}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 100,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
  review: {
    color: 'gray'
  }
});