import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './MapCard.style';

const MapCard = ({ data, onSelect }) => (
    <TouchableOpacity onPress={onSelect} >
      <View style={styles.card}>
        <Image source={{ uri: data.listViewIcon }} style={styles.image} />
        <Text style={styles.name}>{data.displayName}</Text>
      </View>
    </TouchableOpacity>
  );
  
  export default MapCard;