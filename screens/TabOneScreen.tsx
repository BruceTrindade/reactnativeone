import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

//mock
const mockDepoimentos = [
  {
    company: "cgTech",
    describeTheCoffee: "its cool",
    timestamp: Date.now(),
  },
];

// Destructuring assingment
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
  return (
    <View style={styles.container}>
      <FlatList
      style={{ width: "100%"}}
        data = {mockDepoimentos}
        renderItem={({ item }) => <DepoimentListItem depoimento={item} />}
      />
    </View>
  );
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
