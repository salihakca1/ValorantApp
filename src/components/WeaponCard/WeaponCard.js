import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './WeaponCard.style';

    const WeaponCard = ({ data, onSelect }) => (
        <TouchableOpacity onPress={onSelect} >
        <View style={styles.card}>
        <Image source={{ uri: data.displayIcon }} style={styles.image} />
        <Text style={styles.name}>{data.displayName}</Text>
        </View>
    </TouchableOpacity>
    );

export default WeaponCard;