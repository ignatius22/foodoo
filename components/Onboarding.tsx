import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {slides} from '../data';
import OnboardingItem from './OnboardingItem';

const Onboarding = () => {
  return (
    <View style={styles.root}>
      <FlatList
        data={slides}
        renderItem={({item}) => <OnboardingItem item={item} />}
        showsHorizontalScrollIndicator
        horizontal
        pagingEnabled
        bounces={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Onboarding;
