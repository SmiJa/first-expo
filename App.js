import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.top}>
        <Text style={styles.navWrap}>
          <Text style={styles.nav}>Home</Text>
          <Text style={styles.nav}>About</Text>
          <Text style={styles.nav}>Contact</Text>
        </Text>
      </Text>
      <Text style={styles.main}>
        
      <Text>Some Text</Text>
      </Text>
      <Text style={styles.bottom}>

      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  top: {
    backgroundColor: '#101010',
    width: '100%',
    height: '100px'
  },
  main: {
    width: '100%',
    height: 'calc(100% - 15px)',
    backgroundColor: '#333',
    padding: '30px',
    color: '#fff',
  },
  bottom: {
    width: '100%',
    padding: '10px',
    height: '50px',
    backgroundColor: '#101010',
  },
  navWrap: {
    display: 'flex',
    flexDirection: 'row',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav: {
    padding: '10px',
  }
});
