import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BootSplash from 'react-native-bootsplash';
import Onboarding from './components/Onboarding';
import Registration from './screens/Registration';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Loading = () => {
  return <ActivityIndicator size="large" />;
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');
      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (error) {
      console.log('Error @checkingOnboarding:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  useEffect(()=>{
    checkOnboarding()
  },[])
  return (
    <View style={styles.cont}>
      {loading ? (
        <Loading />
      ) : viewedOnboarding ? (
        <Registration />
      ) : (
        <Onboarding />
      )}
      <StatusBar barStyle="default" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
});
