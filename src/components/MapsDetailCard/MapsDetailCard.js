import React from "react";
import { View, Text, Image } from 'react-native';
import styles from './MapsDetailCard.style';

const MapsDetailCard = ({ data }) => (
    <View style={styles.card}>
        <Image source={{ uri: data.displayIcon }} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={styles.name}>{data.displayName}</Text>
            <Text style={styles.coordinates}>{data.coordinates}</Text>
        </View>
    </View>
);

export default MapsDetailCard;

