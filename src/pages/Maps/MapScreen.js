import React from "react"; 
import { FlatList, StyleSheet } from "react-native";

import Config from 'react-native-config'; 

import useFetch from '../../hooks/UseFetch'; 
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import MapCard from "../../components/MapCard/MapCard";

function MapScreen({navigation}){

    const { error, loading, data } = useFetch(Config.MAPS_API_URL);

    const handleProductSelect = uuid => {
      navigation.navigate('MapDetailScreen', { uuid });
    };
  
    const renderProduct = ({ item }) => (
        <MapCard data={item} onSelect={() => handleProductSelect(item.uuid)} />
      );

      if (loading) {
        return <Loading />;
      }
    
      if (error) {
        return <Error />;
      } 
      return (
        <FlatList
          data={data.data} 
          renderItem={renderProduct}
          keyExtractor={item => item.uuid} 
          contentContainerStyle={styles.container} 

          />
    );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#121212',
  },
  })
export default MapScreen;

