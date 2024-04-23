import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import Onboarding from './components/Onboarding';

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
  return (
    <View style={styles.cont}>
      <Onboarding />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },

});
