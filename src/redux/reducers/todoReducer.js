// import {order_ice, restock_ice} from

// import { Add_Task } from
import {Add_Task, Delete_Task, Edit_Task} from '../actions/todoAction';
// import uuid from "uuid";

const INITIAL_STATE = {
  personal: [
    // {id:1,title: 'breakfast', sub: 'oats'},
    // {id:2,title: 'study', sub: 'js'},
    // {title: '2', sub: 'ok'},
  ],

  officeWork: [
    // {id:10,title:"assignment", sub:"Javascript assignment"},
    // {id:11,title:"meeting", sub:"meeting at 11am"},
  ],

  fitness: [
    // {id:12,title:"Gym", sub:"Monday-chest"},
    // {id:13,title:"diet", sub:"protein"},
  ],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case Add_Task:
      // console.log({...state})
      // console.log({number_of_ice:state.number_of_ice-1})
      // return {...state, number_of_ice: state.number_of_ice -payload};
      return {...state, ...payload};

    // console.log(...state)
    case Delete_Task:
      return {...state, ...payload};
    case Edit_Task:
      return {...state, ...payload};
    // return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

export default todoReducer;
