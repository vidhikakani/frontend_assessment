import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Platform, StatusBar } from 'react-native';
import MyCard from './MyCard'
import {fruits} from './fruits'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View> 
          {
            fruits.data.map((fruit, idx) => <MyCard fruit={fruit} key={fruit.name} index={idx} length={fruits.data.length} />)
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginHorizontal: 15
  },
});
