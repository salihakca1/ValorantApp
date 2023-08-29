import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './TiersCard.style';

    const TiersCard = ({ data }) => (
        <View style={styles.card}>
        <Image source={{ uri: data.largeIcon }} style={styles.image} />
        <Text style={styles.name}>{data.tierName}</Text>
        </View>
);
export default TiersCard;
