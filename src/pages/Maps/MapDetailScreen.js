import React from "react"; 

import useFetch from '../../hooks/UseFetch'; 

import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Config from 'react-native-config'; 
import MapsDetailCard from "../../components/MapsDetailCard/MapsDetailCard";

function MapDetailScreen({route}){
    const {uuid} = route.params;
    const { error, loading, data } = useFetch(Config.MAPS_API_URL+"/"+uuid);

    if(loading){
        return <Loading />;
    }

    if(error){ 
        return <Error />;
    }


    return(
      <MapsDetailCard data={data.data}></MapsDetailCard>
    );
}

export default MapDetailScreen;

