
import {ADD_ACTION, SUB_ACTION} from "./constants"

export function add(value){
    return {
        type : ADD_ACTION,
        value
    }
}

export function sub(value){
    return {
        type : SUB_ACTION,
        value
    }
}
