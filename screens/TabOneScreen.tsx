import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { getFirestore, collection, onSnapshot } from "firebase/firestore";

import { useEffect, useState  } from 'react';

const firestoreDB = getFirestore();

//Destructuring assingment
const DepoimentListItem = ({ depoimento }) => {
  return (
    <View style={{ padding: 8 }}>
      <Text>{depoimento.company}</Text>
    </View>
  );  
};

export default function TabOneScreen({
   navigation,
  }: RootTabScreenProps<'TabOne'>) {
    useEffect(() => {
      const unsub = onSnapshot(
        collection(firestoreDB, "depoimento"),
        (result) => {
        console.log(
          result.docs.map((value, index) => {
            return value.data();    
          })
        );
        // const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        // console.log(source, "data: ", doc.data());
      });
      return unsub
    }, []);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
