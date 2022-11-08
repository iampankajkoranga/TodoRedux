import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, editTask} from '../redux/actions/todoAction';
// import uuid from "uuid";




export class AddTask extends Component {
  constructor(props) {
    super(props);
    const {route: {params}} = props;
    this.state = {
      // id:'',
      title: params?.item?.title || '',
      sub: params?.item?.sub || '',
    };
  }




  handleAddTodo =()=>{

    const {
        todoData,
        route: {
          params: {type,item,edit},
        },
      } = this.props;

      if(edit){
        const prevData = todoData[type]
        const finalData = prevData.map(element => {
            if(element.id === item.id){
                return {
                    ...element,
                    title: this.state.title,
                    sub: this.state.sub
                }
            } else {
                return element;
            }
        })
        // console.log('finalData',finalData);
        this.props.pEditTask(finalData,type)
      }else{
        const newTask = {
            title: this.state.title,
           sub: this.state.sub,
            id: +new Date()
        }
    
        todoData[type].push(newTask)
        // console.log('taskData[type]',taskData[type])
        
        this.props.adding(todoData[type],type)
        // this.props.navigation.navigate('Tasks')
      }
      this.props.navigation.goBack()

    
  }
  render() {
    return (
      <View style={styles.addData}>
        <TextInput
          style={styles.input}
          value={this.state.title}
          onChangeText={text => this.setState({title: text})}
          placeholder="Enter Title"></TextInput>
        <TextInput
          style={styles.input}
          value={this.state.sub}
          onChangeText={text => this.setState({sub: text})}
          placeholder="Enter Subtitle"></TextInput>
        <TouchableOpacity onPress={() => {this.handleAddTodo();}}
        >
          <Text style={styles.button}>ADD NEW TODO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = {
  adding: add,
  pEditTask:editTask
};

const mapStateToProps = state => {
  return {
    todoData: state.todoReducer,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTask);

const styles = StyleSheet.create({
  addData: {
    alignItems: 'center',
    // backgroundColor:"green",
    width: '100%',
    marginTop: 20,
    // padding:10
  },
  input: {
    marginBottom: 10,
    borderWidth:1
  },
  button: {
    // justifyContent:"center"
    borderWidth: 0.1,
    // borderRadius: 20,
    backgroundColor: 'red',
    padding: 10,
    color:"white"
  },
});
