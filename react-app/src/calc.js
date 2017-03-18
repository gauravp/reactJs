import React from "react";

import {createStore, applyMiddleware} from "redux";


// actions type/constants
const ADD_ACTION = "ADD";
const SUB_ACTION = "SUB";

// reducer
let initialState = 0;

let sum = localStorage.getItem("sum");

if(sum){
	initialState = parseInt(sum);
}

function math_reducer(state=initialState, action){
	console.log("action ", action);
	switch(action.type){
		case ADD_ACTION:{
				return state + action.value
		}


		case SUB_ACTION:{
				return state - action.value
		}

		default:
			return state;
	}
}


function reducer (state=[], action){
	switch(action.type){
		case "ADD_TO_CART":{
			return [...state, action.item]
		};

		default:
			return state;
	}
}

// middleware 
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

import {combineReducers} from "redux";
let rootReducer = combineReducers({

	math: math_reducer,
	cart: reducer

})

// store
let store = createStore(rootReducer, {math: initialState},  applyMiddleware(logger));


store.subscribe( () => {
	console.log("state value subscribe ", store.getState());

	window.localStorage.setItem("sum", store.getState().math);
});
/*
store.dispatch({

	type: ADD_ACTION,
	value:1
});

store.dispatch({

	type: ADD_ACTION,
	value:2
}); */


// action creators
function add(value){
	return {
		type:ADD_ACTION,
		value
	}
}

function sub(value){
	return {
		type:SUB_ACTION,
		value
	}
}

export class Calc extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			result: store.getState().math
		}
	}

	componentDidMount(){
		this.unsubscribe = store.subscribe(() => {
				this.setState({
					result:store.getState().math
				})
				
		});
	}

	componentWillUnmount(){
		if(this.unsubscribe)
				this.unsubscribe();
	}

	render(){
		return (
				<div>
				<h1> <br/>Result : {this.state.result}</h1>
				<button onClick={() => store.dispatch(add(2))}>Add
				</button>
				</div>
			)
	}
}
