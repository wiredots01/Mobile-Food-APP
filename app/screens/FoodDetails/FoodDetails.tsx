import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import yelp from '../../utils/yelp';


interface FoodDetailsScreenProps {
  route: {
    params: {
      id: string;
    }
  }
};

interface ResultProp {
  name: string;
  photos: string[];
}

export const FoodDetailsScreen: React.FC<FoodDetailsScreenProps> = ({ route }) => {
  const [result, setResult] = useState<ResultProp | null>(null);
  const { id }= route.params;
  console.log('id', id);

  const getFoodDetails = async (id: string) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getFoodDetails(id);
  }, []);

  if (!result) return null;
  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => <Image style={styles.photo} source={{ uri: item }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  photo: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    margin: 5,
    borderRadius: 4,
  }
});