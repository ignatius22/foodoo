import {View, Text, FlatList, StyleSheet, Animated} from 'react-native';
import React, { useRef, useState } from 'react';
import {slides} from '../data';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';


const Onboarding = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex,setCurrentIndex] = useState(0)
  const slidesRef = useRef(null)

  const viewableItemChanged = useRef(({viewableItems}: any) =>{
    setCurrentIndex(viewableItems[0].index)
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current
  return (
    <View style={styles.root}>
      <FlatList
        data={slides}
        renderItem={({item}) => <OnboardingItem item={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        keyExtractor={(item) => item.id.toString()} // Convert the id to a string
        scrollEventThrottle={32}
        bounces={false}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],{
          useNativeDriver:false
        })}
        onViewableItemsChanged={viewableItemChanged}
        viewabilityConfig={viewConfig}
      ref={slidesRef}
      />
      <Paginator data={slides} scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Onboarding;
