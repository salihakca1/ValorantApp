import React from "react"; 
import { FlatList, StyleSheet } from "react-native";

import Config from 'react-native-config'; 
import AgentCard from "../../components/AgentCard/AgentCard";

import useFetch from '../../hooks/UseFetch';
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";


function AgentScreen({ navigation }) {
  const { error, loading, data } = useFetch(Config.AGENTS_API_URL);

  const handleProductSelect = uuid => {
    navigation.navigate('AgentDetailScreen', { uuid });
  };

  const renderProduct = ({ item }) => (
    <AgentCard data={item} onSelect={() => handleProductSelect(item.uuid)} />
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
        numColumns={3} 
        contentContainerStyle={styles.container} 
      />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#121212',
},
})


export default AgentScreen;