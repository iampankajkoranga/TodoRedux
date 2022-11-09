import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, del} from '../redux/actions/todoAction';

export class taskScreen extends Component {
  constructor(props) {
    super(props);
  }

  delete = currId => {
    const {
      todoData,
      route: {
        params: {type},
      },
    } = this.props;
    const prevData = todoData[type];
    const newData = prevData.filter(tasks => tasks.id != currId);
    console.log('newwwwwwwwwww', newData);
    this.props.deleting(newData, type);
  };
  edit = (item, type) => {
    this.props.navigation.navigate('AddTask',{type,item,edit:true})

  };
  render() {
    const {
      todoData,
      route: {
        params: {type},
      },
    } = this.props;
    // const {todoData} = this.props;
    // console.log('todoData', todoData.personal);
    console.log(todoData[type]);
    return (
      <View>
        <View style={styles.main}>
        <View style={styles.head}>
          <View style={styles.header}>
            <Text style={styles.text1}>Work Projects</Text>
            <Text>Sunday 1st Jan</Text>
          </View>

          <FlatList
            data={todoData[type]}
            renderItem={({item}) => {
              console.log('item =====>>>>', item);
              return (
                <View style={styles.data}>
                  {/* <Text>{item.id}</Text> */}
                  <Text>{item.title}</Text>
                  <Text>{item.sub}</Text>
                  <TouchableOpacity onPress={() => this.edit(item, type)}>
                  <Image
                      style={styles.img}
                      source={require('../asset/edit.png')}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.delete(item.id)}>
                    <Image
                      style={styles.img}
                      source={require('../asset/delete.png')}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        </View>
        <View style={styles.addButton}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('AddTask', {type: type})
            }>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoData: state.todoReducer,
  };
};

const mapDispatchToProps = {
  adding: add,
  deleting: del,
};

export default connect(mapStateToProps, mapDispatchToProps)(taskScreen);

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    height:"100%",
    // backgroundColor: 'green',
  },
  head: {
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text1: {
    fontSize: 20,
    fontWeight: '500',
  },
  addButton: {
    // positon: 'absolute',
    // bottom: 0,
    // left: 0,
    // alignSelf: 'center',

  },
  addText: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 35,
    position: 'absolute',
    bottom: 0,
    right:0,
    width:45,
    padding:5
 
    

  },
  img: {
    height: 20,
    width: 20,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:"green",
    width: 330,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
