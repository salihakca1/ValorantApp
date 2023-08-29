import React from "react"; 
import { FlatList, StyleSheet, View } from "react-native"; 
import useFetch from '../../hooks/UseFetch'; 

import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Config from 'react-native-config'; 
import TiersCard from "../../components/TiersCard/TiersCard";

function TiersScreen(){

    const { error, loading, data } = useFetch(Config.TIERS_API_URL);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    const filteredData = data.data.filter(item => item.assetObjectName === "Episode1_CompetitiveTierDataTable");
    const flattenedTiers = filteredData.flatMap(item => item.tiers).slice(3);

    const renderTier = ({ item }) => (
        <TiersCard data={item} />
    );

    return(
        <FlatList
            data={flattenedTiers} 
            renderItem={renderTier}
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
});

export default TiersScreen;