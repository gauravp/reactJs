import React from "react";
import {connect} from "react-redux";
import {add, sub} from "../actions";


class Calculator extends React.Component {


	render()
{
		return (
				<div><br/>
					<h1> result : {this.props.title}</h1>
					<h1> result : {this.props.result}</h1>
					<button onClick={() => 
						this.props.onAdd(2)}> Add </button>
				</div>

			)
}
		
}

let mapStateToProps = (state) => {
	return {
		result:state.math,
		title : "Calculator"
	}
}

let mapDispactchToProps = (dispatch) => {
	return {
	onAdd: (value) =>{
		dispatch(add(value))
	}
}
}

 Calculator = connect(mapStateToProps, mapDispactchToProps)(Calculator)

export default Calculator;