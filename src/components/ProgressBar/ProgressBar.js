import React from 'react';
import { View, Text } from 'react-native';
import styles from './ProgressBar.style';

const ProgressBar = ({ progress }) => {
    return (
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress * 100}%` }]} />
      </View>
    );
  };

export default ProgressBar;