import {Animated, StyleSheet, View, useWindowDimensions} from 'react-native';
import React from 'react';

const Paginator = ({data, scrollX}: {data: []; scrollX: any}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.root}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 15, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3], // Change these colors as needed
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    bottom: 70,
  },
  dot: {
    backgroundColor: '#FBDE3F',
    borderRadius: 5,
    marginHorizontal: 8,
    height: 10,
  },
});
