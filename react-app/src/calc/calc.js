import React from "react";
import {createStore,applyMiddleware} from "redux";

store.dispatch({
    type : ADD_ACTION,
    value : 1
});



export class Calc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            result : store.getState().math
        }
    }
    componentDidMount(){
this.unsubscribe = store.subscribe(()=>{
                this.setState({
                    result : store.getState().math
                })
            }
        );
    }
    componentWillUnmount(){
        if(this.unsubscribe)
            this.unsubscribe();
    }
    render(){
        return (
            <div>
                <h1>Result : {this.state.result}</h1>
                <button onClick={() => store.dispatch(add(2))}> Add</button>
            </div>
        )
    }
}