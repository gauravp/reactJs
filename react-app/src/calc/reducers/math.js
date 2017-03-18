import {ADD_ACTION, SUB_ACTION} from "../constants";

export function math_reducer(state=0, action){
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