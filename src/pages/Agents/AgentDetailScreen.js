import React from "react"; 
import { StyleSheet, FlatList, View } from "react-native";
import useFetch from '../../hooks/UseFetch'; 

import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Config from 'react-native-config'; 

import AgentDetailCard from '../../components/AgentDetailCard/AgentDetailCard'

function AgentDetailScreen({route}){
    const {uuid} = route.params;
    const { error, loading, data } = useFetch(Config.AGENTS_API_URL+"/"+uuid);


    
    if(loading){
        return <Loading />;
    }

    if(error){ 
        return <Error />;
    }
   
      
      console.log(data.data.displayName)
    
    return (
        <AgentDetailCard data={data.data}></AgentDetailCard>
    );
}




export default AgentDetailScreen;

