import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './WeaponDetailCard.style';
import ProgressBar from "../ProgressBar/ProgressBar";

const WeaponDetailCard = ({ data }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const MAX_DAMAGE = data.weaponStats ? Math.max(...Object.values(data.weaponStats.damageRanges[0])) : 0;

  const renderDamageRange = (label, damage) => (
    <View style={styles.progressContainer}>
      <Text style={styles.damageText}>{`${label} - ${damage}`}</Text>
      <View style={styles.progressBarContainer}>
        <ProgressBar progress={damage / MAX_DAMAGE} />
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.contentContainer}>
        <Image source={{ uri: data.displayIcon }} style={styles.image} />
        <Text style={styles.name}>{data.displayName}</Text>
      </View>

      {data.weaponStats && (
        <View style={styles.damageRangeContainer}>
          <Text style={styles.damageRangeTitle}>Damage Range</Text>
          {renderDamageRange('Head', data.weaponStats.damageRanges[0].headDamage)}
          {renderDamageRange('Body', data.weaponStats.damageRanges[0].bodyDamage)}
          {renderDamageRange('Leg', data.weaponStats.damageRanges[0].legDamage)}
        </View>
      )}

      <View style={styles.skinsContainer}>
        <Text style={styles.skinsTitle}>Skins</Text>
        <View style={styles.imageListContainer}>
          <FlatList
            data={data.skins}
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.imageListContent}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => setSelectedImageIndex(index)}
                style={[
                  styles.imageWrapper,
                  selectedImageIndex === index && styles.selectedImageWrapper
                ]}
              >
                <Image source={{ uri: item.displayIcon }} style={styles.smallImage} resizeMode="contain" />
              </TouchableOpacity>
            )}
          />
        </View>
        {selectedImageIndex !== null && (
          <View style={styles.descriptionContainer}>
            <Text style={styles.damageRangeTitle}>{data.skins[selectedImageIndex].displayName}</Text>
            <Image source={{ uri: data.skins[selectedImageIndex].displayIcon }} style={styles.largeImage} />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default WeaponDetailCard;