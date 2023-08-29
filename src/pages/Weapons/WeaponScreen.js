import React from "react"; 
import { FlatList, StyleSheet } from "react-native"; 
import useFetch from '../../hooks/UseFetch';
import Config from 'react-native-config'; 

import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import WeaponCard from "../../components/WeaponCard/WeaponCard";

function WeaponScreen({navigation}) {
    const { error, loading, data } = useFetch(Config.WEAPONS_API_URL);

    const handleProductSelect = uuid => {
      navigation.navigate('WeaponDetailScreen', { uuid });
    };
  
    const renderProduct = ({ item }) => (
      <WeaponCard data={item} onSelect={() => handleProductSelect(item.uuid)} />
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
            numColumns={2} 
            contentContainerStyle={styles.container} 
          />
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8, 
        backgroundColor: '#121212',
    },
});

export default WeaponScreen;

