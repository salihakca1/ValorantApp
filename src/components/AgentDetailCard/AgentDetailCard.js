import React, { useState } from "react";
import { View, Text, Image, ImageBackground, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import styles from './AgentDetailCard.style';


const AgentDetailCard = ({ data }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={{ uri: data.background }}
          style={styles.backgroundImage}
        >
          <View style={styles.contentContainer}>
            <Image
              source={{ uri: data.fullPortrait }}
              style={styles.image}
            />
            <Text style={styles.name}>{data.displayName}</Text>
            <Text style={styles.developerName}>{data.developerName}</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <View style={styles.descriptionTextContainer}>
          <Text style={styles.descriptionText}>{data.description}</Text>
        </View>
      </View>

      <View style={styles.abilitiesContainer}>
        <Text style={styles.abilitiesTitle}>Abilities</Text>
        
        <View style={styles.imageListContainer}>
          <FlatList
            data={data.abilities}
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
                <Image
                  source={{ uri: item.displayIcon }}
                  style={styles.smallImage}
                />
              </TouchableOpacity>
            )}
          />
        </View>

        {selectedImageIndex !== null && (
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>{data.abilities[selectedImageIndex].displayName}</Text>
            <View style={styles.descriptionTextContainer}>
              <Text style={styles.descriptionText}>{data.abilities[selectedImageIndex].description}</Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};
  

export default AgentDetailCard;

