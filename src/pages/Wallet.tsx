import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {Balance} from '../components/Balance';
import colors from '../styles/colors';

export function Wallet() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Balance />
      </View>
      <StatusBar backgroundColor={colors.blue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.background,
  },
  headerContainer: {
    backgroundColor: colors.blue,
    width: '100%',
    height: 380,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
