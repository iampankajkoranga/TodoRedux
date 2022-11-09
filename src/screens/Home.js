import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

// state.reducer[type].
const Home = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.text1}>Hello</Text>
        <Text style={styles.text3}> Jasson</Text>
        <Text style={styles.text2}>Sunday 1st Jan</Text>
      </View>
      <View style={styles.header2}>
        <Text>57 created tasks</Text>
        <Text>35 completed tasks</Text>
      </View>
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categ} onPress={()=>navigation.navigate("taskScreen",
    {type:"personal"})}   >
          <Text style={styles.taskText}>Personal Work</Text>
          <Text>10 tasks</Text>
  
        </TouchableOpacity>
        <TouchableOpacity style={styles.categ} onPress={()=>navigation.navigate("taskScreen",
    {type:"officeWork"})}   >
          <Text style={styles.taskText}>Office task</Text>
          <Text>12 tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categ} onPress={()=>navigation.navigate("taskScreen",
    {type:"fitness"})}   >
          <Text style={styles.taskText}>Fitness task</Text>
          <Text>5 tasks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor:"lightblue",
    
    
    height:"100%"

    // padding:10
  },
  header: {
    marginLeft: 15,
  },
  header2: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 20,
  },
  text1: {
    fontSize: 40,
  },
  text2: {
    fontSize: 15,
  },
  text3: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  taskText: {
    fontSize: 18,
  },
  categories: {
    marginTop: 30,
    // backgroundColor:"red",
    alignItems: 'center',
    flexDirection: 'row',
    // borderWidth:1
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  categ: {
    borderWidth:1,
    width:100,
    padding: 10,
    backgroundColor:"#D6E4E5",
    borderRadius:10
  },
});
