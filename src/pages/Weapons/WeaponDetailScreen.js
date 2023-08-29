import React from "react"; 

import useFetch from '../../hooks/UseFetch'; 

import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Config from 'react-native-config'; 

import WeaponDetailCard from '../../components/WeaponDetailCard/WeaponDetailCard';

function WeaponDetailScreen({route}){

    const {uuid} = route.params;
    const { error, loading, data } = useFetch(Config.WEAPONS_API_URL+"/"+uuid);

    console.log("Weapons Key:", uuid)
 
    if(loading){
        return <Loading />;
    }

    if(error){ 
        return <Error />;
    }
    
    return(
      <WeaponDetailCard data={data.data}></WeaponDetailCard>
    );
}

export default WeaponDetailScreen;

