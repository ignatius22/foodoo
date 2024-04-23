import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Paginator from './Paginator';
import { slides } from '../data';
const {width} = Dimensions.get('window');

interface Slide {
  id: number;
  title: string;
  description: string;
  img: any;
}
const OnboardingItem = ({item}: {item: Slide}) => {
  return (
    <View style={[styles.container, {width}]} key={item.id}>
      <Image
        source={item.img}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />

      <View style={{flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  desc: {
    fontSize: 13,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    width: 305,
  },
});
