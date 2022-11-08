import {Text, View,TextInput, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addTask, editTask } from '../../redux/actions/toDoActions';


export class AddTask extends Component {
  constructor(props) {
      super(props);
    const {route: {params}} = props;
    this.state = {
      title: params?.item?.title || '',
      description: params?.item?.description || '',
      
    };
  }

  handleAddTodo =()=>{

    const {
        taskData,
        route: {
          params: {type,item,edit},
        },
      } = this.props;

      if(edit){
        const prevData = taskData[type]
        const finalData = prevData.map(element => {
            if(element.id === item.id){
                return {
                    ...element,
                    title: this.state.title,
                    description: this.state.description
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
            description: this.state.description,
            id: +new Date()
        }
    
        taskData[type].push(newTask)
        // console.log('taskData[type]',taskData[type])
        
        this.props.pAddTask(taskData[type],type)
        // this.props.navigation.navigate('Tasks')
      }
      this.props.navigation.goBack()

    
  }
  
  render() {
    
    return (
      <View>
        <TextInput
          value={this.state.title}
          onChangeText={text => this.setState({title: text})}
          placeholder="enter the title"></TextInput>
        <TextInput
          value={this.state.description}
          onChangeText={text => this.setState({description: text})}
          placeholder="entter subtitle"></TextInput>
        <TouchableOpacity onPress={()=>this.handleAddTodo()}>
          <Text>ADD NEW TODO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = {
    
    pAddTask: addTask,
    pEditTask: editTask
  };

const mapStateToProps = state => {
    return {
      taskData: state.toDoReducer,
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(AddTask);