import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Hello home in tab navigator</Text>
    </View>
  );
}

export function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Hello profile in tab navigator</Text>
    </View>
  );
}

export function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Hello settings in tab navigator</Text>
    </View>
  );
}

export function Second() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Hello second screen in Drawer navigator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt: {
    fontSize: 25,
    color: '#ccc',
    textAlign: 'center',
  },
});
