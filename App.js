import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

export default function App() {
  // var a=6;
const [Count,SetCount]=useState(5)

const Click=()=>{
  SetCount(Count+1);
  console.log(Count);
}
const Remove=()=>{
  SetCount(Count-1);
  console.log(Count);
}
  return (
    <View style={styles.container}>
      <Text>Count :{Count}</Text>
      {/* <StatusBar style="auto" /> */}
      <TouchableOpacity  onPress={Click}>
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={Remove}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
